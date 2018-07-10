import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubsRoutingModule } from './subs-routing.module';
import { SubsComponent } from './subs.component';

@NgModule({
  imports: [
    CommonModule,
    SubsRoutingModule
  ],
  declarations: [SubsComponent]
})
export class SubsModule { }
