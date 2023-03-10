import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './Components/EmployeeController/employee/employee.component';
import { LoginComponent } from './Components/login/login.component';
import { SidenavComponent } from './Components/Sidenavbar/sidenav/sidenav.component';
import { TopnavbarComponent } from './Components/Topnavbar/topnavbar/topnavbar.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'topnavbar', component: TopnavbarComponent },
{ path: 'sidenavbar', component: SidenavComponent },
{ path: 'employee', component: EmployeeComponent },
{ path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
// { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page];
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
