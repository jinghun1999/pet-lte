import {Component, OnInit} from '@angular/core';

import {ReportService} from '../../services/report.service';
import {GroupMonthRevenue} from '../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  chartOption: any;
  ds: GroupMonthRevenue[];

  constructor(
    private dbService: ReportService
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.load();
    });
  }

  load(): void {
    this.dbService.getGroupMonth().subscribe(rs => {
      this.ds = rs.Sign ? rs.Message as GroupMonthRevenue[] : [];
      this.loadChart();
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
