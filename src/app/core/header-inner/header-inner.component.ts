import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserToken} from '../../models';
import {AuthService} from '../../services';

// import {build$} from 'protractor/built/element';

@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent implements OnInit {
  public currentUser: UserToken;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.userToken;
  }

  ngOnInit() {

  }

  logout(): void {
    // this.authService.logout();
    localStorage.clear();
    alert('注销成功');
    this.router.navigate(['/']);
  }
}
