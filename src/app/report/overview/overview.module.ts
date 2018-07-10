import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent} from './overview.component';
import { OverviewRoutingModule } from './overview-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule,
    NgxEchartsModule
  ],
  declarations: [
    OverviewComponent
  ]
})
export class OverviewModule { }
