import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../../environments/environment';
import {LoginParams, UserToken, Result} from '../../models/index';

@Injectable()
export class AuthService {
  public loginParams: LoginParams;
  public userToken: UserToken;

  constructor(
    private http: HttpClient
  ) {
    this.userToken = JSON.parse(localStorage.getItem('USER_TOKEN'));
  }

  login(username: string, password: string): Observable<Result> {
    const params = 'type=m&identity=' + username + '&password=' + password + '&verCode=123';
    return this.http.get<Result>(environment.authUrl + '/ad?' + params);
  }

  refreshToken(): Observable<string> {
    /*
        The call that goes in here will use the existing refresh token to call
        a method on the oAuth server (usually called refreshToken) to get a new
        authorization token for the API calls.
    */
    this.loginParams = JSON.parse(localStorage.getItem('LOGIN_PARAMS'));
    if (!this.loginParams) {
      return of(null);
    }
    this.login(this.loginParams.userName, this.loginParams.password).subscribe(data => {
      return of(null);
    });
  }

  logout(): Observable<any> {
    return this.http.post<any>(environment.baseUrl + '/account/logout', {});
  }

  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
  }
}
