import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from '../../models/common/result';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ReportGroupService {
  constructor(
    private http: HttpClient,
  ) {
  }

  // 集团数据
  getGroupInfo(id: string): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportBranch/getBranchInfo');
  }

  getGroupMonth(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportGroup/getMontTotalIncomeExpenditure');
  }

  getBranchEnt(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportGroup/getSubs');
  }

  getMembers(page: number, size: number): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportGroup/getGuestPager?page=' + page + '&size=' + size);
  }

  // 支出明细
  getExpendPager(page: number, size: number, date_type: string): Observable<Result> {
    let url = `${environment.baseUrl}/reportGroup/GetExpendDetailPager?date_type=${date_type}&page=${page}&size=${size}`;
    return this.http.get<Result>(url);
  }

  // 收入明细
  getSalesPager(page: number, size: number, date_type: string): Observable<Result> {
    let url = `${environment.baseUrl}/reportGroup/getIncomeDetailPager?date_type=${date_type}&page=${page}&size=${size}`;
    return this.http.get<Result>(url);
  }
}
