import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BranchService} from '../../../services';
import {GroupMonthRevenue, GuestModel, Pager} from '../../../models';
import {EarnMoney} from '../../../models/earnMoney';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  id: string;
  pager: Pager;
  ds: GroupMonthRevenue[];
  list: EarnMoney[];
  chartOption: any;

  public _total = 0;  // 总数据条数
  public size = 15; // 每页数条数
  public page = 1; // 当前页码

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.getBoard();
      this.getEarn();
      this.getStock();
    });
  }

  getBoard(): void {
    this.branchService.getMonthRevenue(this.id)
      .subscribe(res => {
        this.ds = res.Sign ? res.Message as GroupMonthRevenue[] : [];
        this.loadChart();
      });
  }

  getEarn(): void {
    this.branchService.getEarnPager(1).subscribe((res) => {
      if (res.Sign) {
        this.pager = res.Message as Pager;
        this.list = this.pager.Rows as EarnMoney[];
        this._total = this.pager.RowCount;
      }
    });
  }
  getStock(): void {
    this.branchService.getStockPager(1).subscribe((res) => {
      if (res.Sign) {
        this.pager = res.Message as Pager;
        this.list = this.pager.Rows as EarnMoney[];
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
}
