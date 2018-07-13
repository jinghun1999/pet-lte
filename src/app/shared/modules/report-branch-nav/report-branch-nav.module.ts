import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReportBranchNavComponent} from './report-branch-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ReportBranchNavComponent],
  exports: [ReportBranchNavComponent]
})
export class ReportBranchNavModule {
}
