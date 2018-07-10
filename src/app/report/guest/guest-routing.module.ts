import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GuestComponent} from './guest.component';

const routers: Routes = [{
  path: '', component: GuestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class GuestRoutingModule {
}
