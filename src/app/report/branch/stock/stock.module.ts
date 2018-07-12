import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';
import { StockRoutingModule } from './stock-routing.module';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    StockRoutingModule
  ],
  declarations: [StockComponent]
})
export class StockModule { }
