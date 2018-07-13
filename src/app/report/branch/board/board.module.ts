import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {BoardRoutingModule} from './board-routing.module';
import {NgxEchartsModule} from 'ngx-echarts';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import {ReportBranchNavModule} from '../../../shared/modules';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    BoardRoutingModule,
    NgxEchartsModule,
    ReportBranchNavModule
  ],
  declarations: [BoardComponent]
})
export class BoardModule {
}
