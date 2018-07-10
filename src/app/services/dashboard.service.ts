import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {Result} from '../models/result';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dbUrl = 'http://localhost:3500/api/dashboard/getdashboard';

  constructor(
    private http: HttpClient,
  ) {
  }

  getBranchEnt(): Observable<Result> {
    this.dbUrl = 'http://petapi.yinway.cn/service/api/report/getBranchEnterprise';
    return this.http.get<Result>(environment.baseUrl + '/report/getBranchEnterprise');
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(error.statusText);
      if (error.status === 401) {
        console.error('请重新登录');
      }
      return of(result as T);
    };
  }

  private log(message: string) {
    // alert(message);
    console.log(message);
  }
}
