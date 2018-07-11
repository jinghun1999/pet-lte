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
  id: string;
  pager: Pager;
  list: StockModel[];
  sums: StockSum[];

  public _total = 0;  // 总数据条数
  public size = 15; // 每页数条数
  public page = 1; // 当前页码

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.getStock();
      this.getStockSum();
    });
  }

  getStock(): void {
    this.branchService.getStockPager(1, 105).subscribe((res) => {
      if (res.Sign) {
        this.pager = res.Message as Pager;
        this.list = this.pager.Rows as StockModel[];
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
}
