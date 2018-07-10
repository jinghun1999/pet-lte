import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './member.component';

const routers: Routes = [{
  path: '', component: MemberComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class MemberRoutingModule {
}
