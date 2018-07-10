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
}
