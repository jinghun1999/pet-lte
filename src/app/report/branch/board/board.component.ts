import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {ActivatedRoute} from '@angular/router';

import {ReportBranchService} from '../../../shared/services';
import {GroupMonthRevenue, EarnMoney, PagerResult, EntModel, Expense, PageParams, SettleAccount} from '../../../models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  id: string;
  pager: PagerResult;
  ds: GroupMonthRevenue[];
  ent = new EntModel();
  list: EarnMoney[];
  chartOption: any;

  // 点击了哪个展示详情按钮
  t = 1;

  @ViewChild(ModalDirective) modal: ModalDirective;
  currentDate: string;
  detail_list: Expense[] = [];
  settle_list: SettleAccount[] = [];

  pagerParams = new PageParams();
  pagerParams2 = new PageParams();

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
    this.branchService.getEarnPager(this.pagerParams.page, this.pagerParams.size).subscribe((res) => {
      if (res.Sign) {
        this.pager = res.Message as PagerResult;
        this.list = this.pager.Rows as EarnMoney[];
        this.pagerParams.total = this.pager.RowCount;
      }
    });
  }

  pageChanged(event: any): void {
    this.pagerParams.page = event.page;
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

  showModal(t: number, d: string) {
    this.t = t;
    this.pagerParams2 = new PageParams();
    if (t === 1) {
      this.currentDate = d;
      this.getDailyPager();
    } else if (t === 2) {
      this.getSettleDetailPager();
    }
  }

  getSettleDetailPager(): void {
    this.branchService.getSettlePager(this.pagerParams2.page, this.pagerParams2.size, null, null).subscribe((res) => {
      if (res.Sign) {
        const p = res.Message as PagerResult;
        this.settle_list = p.Rows as SettleAccount[];
        this.pagerParams2.total = p.RowCount;
        if (!this.modal.isShown) {
          this.modal.show();
        }
      }
    });
  }

  getDailyPager(): void {
    this.branchService.getDailySellPager(this.pagerParams2.page, this.pagerParams2.size, null, null).subscribe((res) => {
      if (res.Sign) {
        const p = res.Message as PagerResult;
        this.detail_list = p.Rows as Expense[];
        this.pagerParams2.total = p.RowCount;
        if (!this.modal.isShown) {
          this.modal.show();
        }
      }
    });
  }

  handler2(type: string, $event: ModalDirective) {
    if (type === 'onHide') {
      // this.detail_list = [];
      // this.settle_list = [];
    }
  }

  detailPageChanged($event: any): void {
    if (this.modal.isShown) {
      this.pagerParams2.page = $event.page;
      if (this.t === 1) {
        this.getDailyPager();
      } else if (this.t === 2) {
        this.getSettleDetailPager();
      }
    }
  }
}
