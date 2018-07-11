import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Result} from '../models';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private http: HttpClient) {
  }

  getBoard(id: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/report/getBranchEnterprise');
  }

  getMembers(id: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '?id' + id);
  }


  getMonthRevenue(id: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getMonthTotalRevenue?id=' + id);
  }

  // 获取分店每天营收明细
  getEarnPager(page: number, size: number): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getCountTotalEarnMoney?size=' + size + '&page=' + page);
  }

  getStockPager(page: number, size: number): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getStockList?size=' + size + '&page=' + page);
  }

  getStockSum(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getStockSum');
  }
}
