import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview.component';
import {OverviewRoutingModule} from './overview-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    OverviewRoutingModule,
    FormsModule,
    NgxEchartsModule
  ],
  declarations: [
    OverviewComponent
  ]
})
export class OverviewModule {
}
