import { Component, OnInit } from '@angular/core';

import { DashboardService} from '../services/dashboard.service';
import { Ent } from '../models/ent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ds: Ent[];

  constructor(
    private dbService: DashboardService
  ) { }

  ngOnInit() {
    setTimeout(() => { this.getDashboard(); });
  }

  getDashboard(): void {
    this.dbService.getBranchEnt().subscribe(rs => {
      this.ds = rs.Sign ? rs.Message as Ent[] : [];
    });
  }
}
