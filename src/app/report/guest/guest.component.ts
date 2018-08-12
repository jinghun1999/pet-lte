import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ReportGroupService} from '../../shared/services/index';
import {GuestModel, PageParams, PagerResult, IncomeDetail} from '../../models';
import {ModalDirective} from 'ngx-bootstrap/modal';;

@Component({
  selector: 'app-member',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  id: string;
  guestPager: PagerResult;
  list: GuestModel[];
  list_income: IncomeDetail[] = [];
  currentGuest: GuestModel;

  pageParams = new PageParams();
  pageParams2 = new PageParams();
  @ViewChild(ModalDirective) modal: ModalDirective;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reportService: ReportGroupService) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => this.getGuestPager());
  }

  getGuestPager(): void {
    this.reportService.getMembers(this.pageParams.page, this.pageParams.size).subscribe(res => {
      if (res.Sign) {
        this.guestPager = res.Message as PagerResult;
        this.list = this.guestPager.Rows as GuestModel[];
        this.pageParams.total = this.guestPager.RowCount;
      }
    });
  }

  pageChanged(event: any): void {
    this.pageParams.page = event.page;
    this.getGuestPager();
  }

  showModal(guest: GuestModel): void {
    this.currentGuest = guest;
    this.getExpensesRecordPager();
  }

  modalHandler(type: string, $event: ModalDirective) {
    if (type === 'onHide') {

    }
  }

  getExpensesRecordPager(): void {
    this.reportService.getSalesPager(this.pageParams2.page, this.pageParams2.size, 'THIS_MONTH').subscribe((res) => {
      if (res.Sign) {
        const p = res.Message as PagerResult;
        this.list_income = p.Rows as IncomeDetail[];
        this.pageParams.total = p.RowCount;
        if (!this.modal.isShown) {
          this.modal.show();
        }
      }
    });
  }
  detailPageChanged($event: any): void {
    this.pageParams2.page = $event.page;
    this.getExpensesRecordPager();
  }
}
