import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Result} from '../../models/index';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportBranchService {

  constructor(private http: HttpClient) { }


  // 分店明细数据
  getBranchInfo(id: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getBranchInfo');
  }

  // 最近12个月收支数据
  getMonthRevenue(id: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getMonthTotalIncomeExpenditure?id=' + id);
  }

  // 获取分店每天各项营收汇总
  getEarnPager(page: number, size: number): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getDailyTotalMoney?size=' + size + '&page=' + page);
  }

  // 库存信息
  getStockPager(page: number, size: number, kw: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getStockPager?size=' + size + '&page=' + page + '&kw=' + kw);
  }

  // 仓库汇总
  getWarehouseSum(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getWarehouseSum');
  }
}
