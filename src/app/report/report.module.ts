import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent} from './report.component';
import { ReportRoutingModule } from './report-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgxEchartsModule
  ],
  declarations: [
    ReportComponent
  ]
})
export class ReportModule { }
