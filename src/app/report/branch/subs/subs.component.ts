import {Component, OnInit} from '@angular/core';
import {EntModel} from '../../../models';
import {ReportGroupService} from '../../../shared/services';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent implements OnInit {
  hospitals: EntModel[];

  constructor(private  groupService: ReportGroupService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.load();
    });
  }

  load(): void {
    this.groupService.getBranchEnt().subscribe(rs => {
      this.hospitals = rs.Sign ? rs.Message as EntModel[] : [];
    });
  }
}
