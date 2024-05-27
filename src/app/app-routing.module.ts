import { AboutUsComponent } from './about-us/about-us.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Admin/admin/components/login/login.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { DashboardComponent } from './Admin/admin/components/dashboard/dashboard.component';
import { HomeComponent } from './User/home/home.component';
import { RegistrationComponent } from './User/user-login/registration/registration.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { combineLatest } from 'rxjs';
import { CarsComponent } from './cars/cars.component';
import { NotfoundComponent } from './notfound/notfound.component';






const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"adminLogin",component:LoginComponent},
  {path:"userLogin",component:UserLoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"contactUs",component:ContactUsComponent},
  {path:"cars",component:CarsComponent},
  {path:"aboutUs",component:AboutUsComponent},
  {path:"home",component:HomeComponent},
  {
path: 'admin',component:AdminComponent, children:[
  {path:'', redirectTo:"login",pathMatch:"full"},
  {path:'dashboard', component:DashboardComponent},
  {path: 'login', component:LoginComponent}
]
  },
  {path:"**",component:NotfoundComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
