//import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponent } from './User/user-login/user-login.component';
import {DashboardComponent} from 'src/app/Admin/admin/components/dashboard/dashboard.component';
import { HomeComponent } from './User/home/home.component';
import { NavbarComponent } from './User/navbar/navbar.component';
import { RegistrationComponent } from './User/user-login/registration/registration.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarsComponent } from './cars/cars.component';
import { NotfoundComponent } from './notfound/notfound.component';







@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationComponent,
    AdminComponent,
    AboutUsComponent,
    FooterComponent,
    ContactUsComponent,
    CarsComponent,
    NotfoundComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
