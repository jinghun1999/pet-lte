import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {adminLteConf} from './admin-lte.conf';

import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

import {LayoutModule} from 'angular-admin-lte';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

import {LoadingPageModule, MaterialBarModule} from 'angular-loading-page';
import {AuthGuard, httpInterceptor} from './shared';
import {AuthService} from './services';

// import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [AuthGuard, httpInterceptor, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
