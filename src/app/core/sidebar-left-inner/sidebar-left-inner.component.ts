import {Component, OnInit} from '@angular/core';

import {UserToken} from '../../models';
import {AuthService} from '../../services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar-left-inner',
  templateUrl: './sidebar-left-inner.component.html'
})
export class SidebarLeftInnerComponent  implements OnInit {
  public currentUser: UserToken;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.currentUser = this.authService.userToken;
  }

  ngOnInit() { }
}
