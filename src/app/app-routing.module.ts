import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Admin/login/login.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';


const routes: Routes = [
  {path:"adminLogin",component:LoginComponent},
  {path:"userLogin",component:UserLoginComponent},
  {path:"dashBd",component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
