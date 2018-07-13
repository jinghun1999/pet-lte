import {Component, OnInit, ViewChild} from '@angular/core';
import {PageParams, PagerResult, StockModel} from '../../../models';
import {StockSum} from '../../../models';
import {ReportBranchService} from '../../../shared/services';
import {ActivatedRoute} from '@angular/router';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  kw = '';
  id: string;
  pager: PagerResult;
  list: StockModel[];
  sums: StockSum[];

  pagerParams = new PageParams();

  pagerParams2 = new PageParams();
  detail_list: object[];

  @ViewChild(ModalDirective) modal: ModalDirective;
  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: ReportBranchService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.getStockSum();
      this.getStockPager();
    });
  }

  getStockPager(): void {
    this.branchService.getStockPager(this.pagerParams.page, this.pagerParams.size, this.kw).subscribe((res) => {
      if (res.Sign) {
        this.pager = res.Message as PagerResult;
        this.list = this.pager.Rows as StockModel[];
        this.pagerParams.total = this.pager.RowCount;
      }
    });
  }

  getStockSum(): void {
    this.branchService.getWarehouseSum().subscribe((res) => {
      if (res.Sign) {
        this.sums = res.Message as StockSum[];
      }
    });
  }

  pageChanged(event: any): void {
    this.pagerParams.page = event.page;
    this.getStockPager();
  }

  search(): void {
    this.getStockPager();
  }

  showModal(d: string) {
    this.detail_list = [];
    this.getStockDetailPager();
  }

  detailPageChanged(event: any): void {
    this.pagerParams2.page = event.page;
    this.getStockDetailPager();
  }
  getStockDetailPager(): void {
    this.branchService.getWarehousePager(this.pagerParams.page, '', '').subscribe((res) => {
      if (res.Sign) {
        this.pager = res.Message as PagerResult;
        this.list = this.pager.Rows as StockModel[];
        this.pagerParams.total = this.pager.RowCount;
        this.modal.show();
      }
    });
  }
  handler(type: string, $event: ModalDirective) {
    if (type === 'onHide') {
      this.detail_list = [];
    }
  }
}
