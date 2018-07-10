import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestRoutingModule } from './guest-routing.module';
import { GuestComponent } from './guest.component';

@NgModule({
  imports: [
    CommonModule,
    GuestRoutingModule
  ],
  declarations: [GuestComponent]
})
export class GuestModule { }
