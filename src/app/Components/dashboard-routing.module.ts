import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditEmployeecontrollerComponent } from './EmployeeController/Components/add-edit-employeecontroller/add-edit-employeecontroller.component';
import { EmployeecontrollerComponent } from './EmployeeController/Components/employeecontroller/employeecontroller.component';
import { InfoComponent } from './info/info.component';
import { SidenavWrapperComponent } from './sidenav-wrapper/sidenav-wrapper.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: 'sidewrapper',
    component: SidenavWrapperComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'employeecontroller',
        component:EmployeecontrollerComponent
      },
      {
        path: 'add-edit-employeecontroller',
        component:AddEditEmployeecontrollerComponent
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
