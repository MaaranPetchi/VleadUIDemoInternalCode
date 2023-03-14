import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';


import { SidenavComponent } from './Components/Sidenavbar/sidenav/sidenav.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list'; 
import { DashboardModule } from './Components/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
   SidenavComponent,
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
   BrowserAnimationsModule,
     //Angular material
     CommonModule,
     //employeeimports
     BrowserModule,
     BrowserAnimationsModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatDialogModule,
     MatFormFieldModule,
     MatInputModule,
     FormsModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatRadioModule,
     MatSelectModule,
     ReactiveFormsModule,
     HttpClientModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule,
     MatSnackBarModule,
     MatStepperModule,
     ReactiveFormsModule,
     MatCheckboxModule,
     MatSidenavModule,
     MatListModule,
     RouterModule,
     DashboardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
