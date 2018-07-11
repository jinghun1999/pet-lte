import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SubsComponent} from './subs.component';

const routers: Routes = [
  {path: '', component: SubsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routers)
  ],
  exports: [RouterModule]
})
export class SubsRoutingModule {
}
