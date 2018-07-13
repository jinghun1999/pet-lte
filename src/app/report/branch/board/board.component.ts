import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {ActivatedRoute} from '@angular/router';

import {ReportBranchService} from '../../../shared/services';
import {GroupMonthRevenue, EarnMoney, RevenueItem, Pager, EntModel} from '../../../models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  id: string;
  pager: Pager;
  ds: GroupMonthRevenue[];
  ent = new EntModel();
  list: EarnMoney[];
  chartOption: any;

  @ViewChild(ModalDirective) modal: ModalDirective;
  currentDate: string;
  detail_list: RevenueItem[] = [];

  public totalItems = 0;  // 总数据条数
  public pageSize = 10; // 每页数条数
  public currentPage = 1; // 当前页码
  public currentPage2 = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: ReportBranchService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.getEnt('0');
      this.getBoard();
      this.getEarnPager();
    });
  }

  getBoard(): void {
    this.branchService.getMonthRevenue(this.id)
      .subscribe(res => {
        this.ds = res.Sign ? res.Message as GroupMonthRevenue[] : [];
        this.loadChart();
      });
  }

  getEarnPager(): void {
    this.branchService.getEarnPager(this.currentPage, this.pageSize).subscribe((res) => {
      if (res.Sign) {
        this.pager = res.Message as Pager;
        this.list = this.pager.Rows as EarnMoney[];
        this.totalItems = this.pager.RowCount;
      }
    });
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getEarnPager();
  }

  getEnt(id: string): void {
    this.branchService.getBranchInfo(id).subscribe((res) => {
      if (res.Sign) {
        this.ent = res.Message as EntModel;
      }
    });
  }

  loadChart(): void {
    const income = [], expenses = [], bankflow = [], months = [];
    this.ds.forEach((item, index) => {
      income.push(item.Income);
      expenses.push(item.Expenses);
      bankflow.push(item.BankFlow);
      months.push(item.Month);
    });
    this.chartOption = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['营收', '支出', '银行流水']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: months
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '营收',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: income
        },
        {
          name: '支出',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: expenses
        },
        {
          name: '银行流水',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: bankflow
        }
      ]
    };
  }

  showModal(d: string) {
    this.currentDate = d;
    this.detail_list.splice(0, this.detail_list.length);
    for (let i = 1; i <= 10; i++) {
      this.detail_list.push({GuestName: '张三', ItemName: '狂犬疫苗接种', ItemCount: 2, Price: 304, TotalPrice: 608, CreatedOn: '2018-6-4 19:34'});
    }
    this.modal.show();
  }

  handler(type: string, $event: ModalDirective) {
    if (type === 'onHide') {
      this.detail_list = [];
    }
  }

  detailPageChanged($event): void {

  }
}
