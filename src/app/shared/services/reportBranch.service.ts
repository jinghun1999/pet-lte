import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Result} from '../../models/index';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportBranchService {

  constructor(private http: HttpClient) {
  }


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

  // 库存明细筛选
  getWarehousePager(page: number, size: number, kw: string, war: string): Observable<Result> {
    const url = `${environment.baseUrl}/reportBranch/getStockDetailPager?war=${war}&kw=${kw}&page=${page}&size=${size}`;
    return this.http.get<Result>(url);
  }

  // 概况上方弹出明细
  getSettlePager(page: number, size: number, start: string, end: string): Observable<Result> {
    const url = `${environment.baseUrl}/reportBranch/getSettleAccountDetailPager?start=${start}&end=${end}&page=${page}&size=${size}`;
    return this.http.get<Result>(url);
  }

  // 概况下方弹出明细
  getDailySellPager(page: number, size: number, start: string, end: string): Observable<Result> {
    const url = `${environment.baseUrl}/reportBranch/getDailySellDetailPager?start=${start}&end=${end}&page=${page}&size=${size}`;
    return this.http.get<Result>(url);
  }
}
