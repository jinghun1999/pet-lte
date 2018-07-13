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

  getGroupMonth(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportGroup/getMontTotalIncomeExpenditure');
  }

  getBranchEnt(): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportGroup/getSubs');
  }

  getMembers(page: number, size: number): Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/reportGroup/getGuestPager?page=' + page + '&size=' + size);
  }

}
