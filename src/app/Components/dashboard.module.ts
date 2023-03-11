import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavWrapperComponent } from './sidenav-wrapper/sidenav-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';
import { MatMenuModule} from '@angular/material/menu';
import { TopnavbarComponent } from './Topnavbar/topnavbar/topnavbar.component';
@NgModule({
  declarations: [SidenavWrapperComponent, DashboardComponent, InfoComponent, UserComponent,TopnavbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class DashboardModule { }
