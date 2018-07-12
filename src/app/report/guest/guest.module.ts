import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {GuestRoutingModule} from './guest-routing.module';
import {GuestComponent} from './guest.component';
// import {PageModule} from '../../components/page/page.module';
import {PaginationModule} from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    GuestRoutingModule
    // PageModule
  ],
  declarations: [GuestComponent]
})
export class GuestModule {
}
