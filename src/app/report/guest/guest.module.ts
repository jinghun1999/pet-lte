import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {GuestRoutingModule} from './guest-routing.module';
import {GuestComponent} from './guest.component';
// import {PageModule} from '../../components/page/page.module';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    GuestRoutingModule
    // PageModule
  ],
  declarations: [GuestComponent]
})
export class GuestModule {
}
