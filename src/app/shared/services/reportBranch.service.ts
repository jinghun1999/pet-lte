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

  // 分店基本信息
  getBranchInfo(id: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getBranchInfo?id=' + id);
  }

  // 最近12个月收支数据
  getMonthRevenue(id: string): Observable<Result> {
    // return this.http.get<Result>(environment.baseUrl + '/reportBranch/getMonthTotalIncomeExpenditure?id=' + id);
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getMonthIEById?id=' + id);
  }

  // 获取分店每天各项营收汇总
  getEarnPager(id: string, page: number, size: number): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/GetIncomeAndPayById?id=' + id + '&size=' + size + '&page=' + page);
  }

  // 库存信息
  getStockPager(id: string, page: number, size: number, kw: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getStockPager?id=' + id + '&size=' + size + '&page=' + page + '&kw=' + kw);
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

  // 支出明细
  getExpendPager(page: number, size: number, ent_id: string, date_type: string): Observable<Result> {
    let url = `${environment.baseUrl}/reportBranch/GetExpendDetailPager?ent_id=${ent_id}&date_type=${date_type}&page=${page}&size=${size}`;
    return this.http.get<Result>(url);
  }

  // 收入明细
  getSalesPager(page: number, size: number, ent_id: string, date_type: string): Observable<Result> {
    let url = `${environment.baseUrl}/reportBranch/getIncomeDetailPager?ent_id=${ent_id}&date_type=${date_type}&page=${page}&size=${size}`;
    return this.http.get<Result>(url);
  }
}
