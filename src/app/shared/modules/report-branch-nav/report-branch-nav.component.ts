import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-branch-nav',
  templateUrl: './report-branch-nav.component.html',
  styleUrls: ['./report-branch-nav.component.css']
})
export class ReportBranchNavComponent implements OnInit {
  @Input() id: string;
  currentUrl = '';

  constructor() { }

  ngOnInit() {
    this.currentUrl = location.href;
  }

}
