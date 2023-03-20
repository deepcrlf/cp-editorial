import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './main-layout.component';
import {AuthGuardService} from "../../services/auth-guard/auth-guard.service.ts.service";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '', canActivate: [AuthGuardService],
        loadChildren: () => import('../dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'dash',
        data: {
          title: 'Dashboard',
          status: true
        }, canActivate: [AuthGuardService],
        loadChildren: () => import('../dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login-page/login-page.module').then(m => m.LoginPageModule)
      },
      {
        path: 'view-profile',
        data: {
          title: 'Profile',
          status: true
        }, canActivate: [AuthGuardService],
        loadChildren: () => import('../view-profile-page/view-profile-page.module').then(m => m.ViewProfilePageModule)
      },
      {
        path: 'tracker',
        data: {
          title: 'Tracker',
          status: true
        }, canActivate: [AuthGuardService],
        loadChildren: () => import('../tracker-page/tracker-page.module').then(m => m.TrackerPageModule)
      },
      {
        path: 'users',
        data: {
          title: 'User Management',
          status: true
        }, canActivate: [AuthGuardService],
        loadChildren: () => import('../user-management-page/user-management-page.module').then(m => m.UserManagementPageModule)
      },
      {
        path: 'publisher',
        data: {
          title: 'Photo Publisher',
          status: true
        }, canActivate: [AuthGuardService],
        loadChildren: () => import('../publisher-page/publisher-page.module').then(m => m.PublisherPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class MainLayoutRoutingModule {
}
