import {Component, OnInit, ViewChild} from '@angular/core';

import {ReportGroupService} from '../../shared/services';
import {EntModel, GroupMonthRevenue, PageParams, PagerResult, IncomeDetail, ExpenseDetail} from '../../models';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  chartOption: any;
  list: GroupMonthRevenue[];
  list_income: IncomeDetail[] = [];
  list_expend: ExpenseDetail[] = [];
  ent = new EntModel();
  t: number;
  smallTitle: string;
  pagerParams2 = new PageParams();
  current_type: string;

  @ViewChild(ModalDirective) modal: ModalDirective;

  constructor(
    private groupService: ReportGroupService
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getEnt(null);
      this.load();
    });
  }

  load(): void {
    this.groupService.getGroupMonth().subscribe(rs => {
      this.list = rs.Sign ? rs.Message as GroupMonthRevenue[] : [];
      this.loadChart();
    });
  }

  loadChart(): void {
    const income = [], expenses = [], bankflow = [], months = [];
    this.list.forEach((item, index) => {
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


  getEnt(id: string): void {
    this.groupService.getGroupInfo(id).subscribe((res) => {
      if (res.Sign) {
        this.ent = res.Message as EntModel;
      }
    });
  }

  showModal(t: number, desc: string, date: string) {
    this.current_type = date;
    this.pagerParams2 = new PageParams();
    this.smallTitle = desc;
    this.t = t;
    if (t === 2) {
      this.getSalesPager();
    } else if (t === 3) {
      this.getExpendPager();
    }
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
      if (this.t === 2) {
        this.getSalesPager();
      } else if (this.t === 3) {
        this.getExpendPager();
      }
    }
  }

  getExpendPager(): void {
    this.groupService.getExpendPager(this.pagerParams2.page, this.pagerParams2.size, this.current_type).subscribe((res) => {
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
    this.groupService.getSalesPager(this.pagerParams2.page, this.pagerParams2.size, this.current_type).subscribe((res) => {
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
}
