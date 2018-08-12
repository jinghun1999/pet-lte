import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {ActivatedRoute} from '@angular/router';

import {ReportBranchService} from '../../../shared/services';
import {GroupMonthRevenue, EarnMoney, PagerResult, EntModel, ExpenseDetail, PageParams, IncomeDetail} from '../../../models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  id: string;
  pager: PagerResult;
  smallTitle: string;
  ds: GroupMonthRevenue[];
  ent = new EntModel();
  list: EarnMoney[];
  chartOption: any;

  // 点击了哪个展示详情按钮，1单日进账，2进账，3出账
  t = 1;

  @ViewChild(ModalDirective) modal: ModalDirective;
  currentDate: string;
  current_type: string;
  list_expend: ExpenseDetail[] = [];
  list_income: IncomeDetail[] = [];

  pagerParams = new PageParams();
  pagerParams2 = new PageParams();

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: ReportBranchService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.getEnt(this.id);
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
    this.branchService.getEarnPager(this.id, this.pagerParams.page, this.pagerParams.size).subscribe((res) => {
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
    let income = [], expenses = [], bankflow = [], months = [];
    this.ds.forEach((item, index) => {
      income.push(item.Income);
      expenses.push(item.Expenses);
      bankflow.push(item.BankFlow);
      months.push(item.Month);
    });

    income = income.reverse();
    expenses = expenses.reverse();
    bankflow = bankflow.reverse();
    months = months.reverse();

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

  showModal(t: number, date: string, small_title: string) {
    this.t = t;
    this.smallTitle = small_title;
    this.pagerParams2 = new PageParams();
    if (t === 1) {
      this.currentDate = date;
      this.current_type = date;
      this.getSalesPager();
    } else if (t === 2) {
      this.current_type = date;
      this.getSalesPager();
    } else if (t === 3) {
      // 上月支出
      this.current_type = date;
      this.getExpendPager();
    }
  }

  getExpendPager(): void {
    this.branchService.getExpendPager(this.pagerParams2.page, this.pagerParams2.size, this.id, this.current_type).subscribe((res) => {
      if (res.Sign) {
        const p = res.Message as PagerResult;
        this.list_expend = p.Rows as ExpenseDetail[];
        this.pagerParams2.total = p.RowCount;
        if (!this.modal.isShown) {
          this.modal.show();
        }
      }
    });
  }

  getSalesPager(): void {
    this.branchService.getSalesPager(this.pagerParams2.page, this.pagerParams2.size, this.id, this.current_type).subscribe((res) => {
      if (res.Sign) {
        const p = res.Message as PagerResult;
        this.list_income = p.Rows as IncomeDetail[];
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
      this.currentDate = '';
    }
  }

  detailPageChanged($event: any): void {
    if (this.modal.isShown) {
      this.pagerParams2.page = $event.page;
      if (this.t === 1) {
        this.getSalesPager();
      } else if (this.t === 2) {
        this.getSalesPager();
      } else if (this.t === 3) {
        this.getExpendPager();
      }
    }
  }
}
