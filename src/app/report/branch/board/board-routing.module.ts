import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BoardComponent} from './board.component';


const routers: Routes = [{
  path: '', component: BoardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class BoardRoutingModule {
}
