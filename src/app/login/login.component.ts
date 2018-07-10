import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthService} from '../services';
import {UserToken} from '../models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  login(): void {
    this.authService.login(this.model.phone, this.model.password).subscribe((res) => {
      // debugger;
      this.loading = false;
      if (res.Sign) {
        const user = res.Message as UserToken;
        localStorage.setItem('TOKEN', user.Token.token);
        localStorage.setItem('USER_TOKEN', JSON.stringify(user));
        localStorage.setItem('LOGIN_PARAMS', JSON.stringify(this.model));

        this.router.navigate([this.returnUrl]);
      } else {
        alert(res.Exception);
      }
    });
  }
}
