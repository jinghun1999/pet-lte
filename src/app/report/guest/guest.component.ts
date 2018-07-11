import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ReportService} from '../../services/index';
import {GuestModel, Pager} from '../../models/index';

@Component({
  selector: 'app-member',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  id: string;
  guestPager: Pager;
  list: GuestModel[];

  public _total = 0;  // 总数据条数
  public size = 15; // 每页数条数
  public page = 1; // 当前页码

  constructor(
    private activatedRoute: ActivatedRoute,
    private reportService: ReportService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => this.getGuestPager(null));
  }

  getGuestPager(page): void {
    if (page) {
      this.page = page.page;
    }
    this.reportService.getMembers(this.page, this.size).subscribe(res => {
      if (res.Sign) {
        this.guestPager = res.Message as Pager;
        this.list = this.guestPager.Rows as GuestModel[];
        this._total = this.guestPager.RowCount;
      }
    });
  }
}
