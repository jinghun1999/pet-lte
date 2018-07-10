import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule
  ],
  declarations: [MemberComponent]
})
export class MemberModule { }
