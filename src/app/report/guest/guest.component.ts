import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ReportService} from '../../services/index';
import {GuestModel} from '../../models/index';

@Component({
  selector: 'app-member',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  id: string;
  list: GuestModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private reportService: ReportService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => this.getRevenue());
  }

  getRevenue(): void {
    this.reportService.getMembers().subscribe(res => {
      this.list = res.Sign ? res.Message as GuestModel[] : [];
    });
  }
}
