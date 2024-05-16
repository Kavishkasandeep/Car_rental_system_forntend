//import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicalComponent } from './Admin/vehical/vehical.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './User/user-login/user-login.component';
import {DashboardComponent} from 'src/app/Admin/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    VehicalComponent,
    UserLoginComponent,
    DashboardComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
