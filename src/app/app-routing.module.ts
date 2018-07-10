import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './shared';

const routes: Routes = [
  {
    path: '',
    data: {title: '首页'},
    children: [
      {path: '', redirectTo: '/report/overview', pathMatch: 'full'},
      {
        path: 'report', data: {title: '报表分析'},
        children: [
          {
            path: 'overview',
            data: {title: '营收', description: '选择店铺以查看营业情况'},
            loadChildren: './report/overview/overview.module#OverviewModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'subs',
            data: {title: '分店', description: '选择店铺以查看营业情况'},
            loadChildren: './report/subs/subs.module#SubsModule',
            canActivate: [AuthGuard]
          },
          {
            path: 'branch',
            data: {title: '分店'},
            children: [
              {path: 'board/:id', data: {title: '概况'}, loadChildren: './report/branch/board/board.module#BoardModule'},
              {path: 'member/:id', data: {title: '会员'}, loadChildren: './report/branch/member/member.module#MemberModule'}
            ]
          }
        ]
      },
      {path: 'accordion', loadChildren: './+accordion/accordion.module#AccordionModule', data: {title: 'Accordion'}},
      {path: 'alert', loadChildren: './+alert/alert.module#AlertModule', data: {title: 'Alert'}},
      {
        path: 'layout', data: {title: 'Layout'},
        children: [
          {
            path: 'configuration',
            loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',
            data: {title: 'Configuration'}
          },
          {
            path: 'custom',
            loadChildren: './+layout/custom/custom.module#CustomModule',
            data: {title: 'Disable Layout', disableLayout: true}
          },
          {path: 'content', loadChildren: './+layout/content/content.module#ContentModule', data: {title: 'Content'}},
          {path: 'header', loadChildren: './+layout/header/header.module#HeaderModule', data: {title: 'Header'}},
          {
            path: 'sidebar-left',
            loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',
            data: {title: 'Sidebar Left'}
          },
          {
            path: 'sidebar-right',
            loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule',
            data: {title: 'Sidebar Right'}
          },
        ]
      },
      {
        path: 'boxs', data: {title: 'Boxs'},
        canActivate: [AuthGuard],
        children: [
          {path: 'box', loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule', data: {title: 'Box'}},
          {path: 'info-box', loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule', data: {title: 'Info Box'}},
          {path: 'small-box', loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule', data: {title: 'Small Box'}}
        ]
      },
      {path: 'dropdown', loadChildren: './+dropdown/dropdown.module#DropdownModule', data: {title: 'Dropdown'}},
      {path: 'tabs', loadChildren: './+tabs/tabs.module#TabsModule', data: {title: 'Tabs'}}
    ]
  },
  {
    path: 'form', data: {title: 'Form'},
    children: [{path: 'input-text', loadChildren: './+form/input-text/input-text.module#InputTextModule', data: {title: 'Input Text'}}]
  },
  {path: 'login', loadChildren: './login/login.module#LoginModule', data: {customLayout: true}},
  {path: 'register', loadChildren: './+register/register.module#RegisterModule', data: {customLayout: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
