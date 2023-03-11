import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { SidenavWrapperComponent } from './sidenav-wrapper/sidenav-wrapper.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: 'sidewrapper',
    component: SidenavWrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
