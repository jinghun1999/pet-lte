import {Component, OnInit} from '@angular/core';
import {Ent} from '../../../models/ent';
import {ReportService} from '../../../services/report.service';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent implements OnInit {
  hospitals: Ent[];
  constructor(private  rpService: ReportService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.load();
    });
  }

  load(): void {
    this.rpService.getBranchEnt().subscribe(rs => {
      this.hospitals = rs.Sign ? rs.Message as Ent[] : [];
    });
  }
}
