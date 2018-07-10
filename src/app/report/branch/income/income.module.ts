import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income.component';
import { IncomeRoutingModule } from './/income-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IncomeRoutingModule
  ],
  declarations: [IncomeComponent]
})
export class IncomeModule { }
