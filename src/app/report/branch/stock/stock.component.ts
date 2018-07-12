import {Component, OnInit} from '@angular/core';
import {Pager, StockModel} from '../../../models';
import {StockSum} from '../../../models';
import {BranchService} from '../../../services';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  kw = '';
  id: string;
  pager: Pager;
  list: StockModel[];
  sums: StockSum[];

  public totalItems = 0;  // 总数据条数
  public pageSize = 10; // 每页数条数
  public currentPage = 1; // 当前页码

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.getStockSum();
      this.getStockPager();
    });
  }

  getStockPager(): void {
    this.branchService.getStockPager(this.currentPage, this.pageSize, this.kw).subscribe((res) => {
      if (res.Sign) {
        this.pager = res.Message as Pager;
        this.list = this.pager.Rows as StockModel[];
        this.totalItems = this.pager.RowCount;
      }
    });
  }

  getStockSum(): void {
    this.branchService.getStockSum().subscribe((res) => {
      if (res.Sign) {
        this.sums = res.Message as StockSum[];
      }
    });
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.getStockPager();
  }

  search(): void {
    this.getStockPager();
  }
}
