import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ReportGroupService} from '../../shared/services/index';
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

  public totalItems = 0;  // 总数据条数
  public pageSize = 10; // 每页数条数
  public currentPage = 1; // 当前页码

  constructor(
    private activatedRoute: ActivatedRoute,
    private reportService: ReportGroupService) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => this.getGuestPager());
  }

  getGuestPager(): void {
    this.reportService.getMembers(this.currentPage, this.pageSize).subscribe(res => {
      if (res.Sign) {
        this.guestPager = res.Message as Pager;
        this.list = this.guestPager.Rows as GuestModel[];
        this.totalItems = this.guestPager.RowCount;
      }
    });
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getGuestPager();
  }
}
