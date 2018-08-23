import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "src/app/login/login.component";
import { AuthGuard } from "src/app/auth.guard";
import { RegisterComponent } from "src/app/register/register.component";
import { HomeComponent } from "src/app/home/home.component";

const routes: Routes = [
  {path : '', redirectTo : 'register', pathMatch : 'full'},
  {path : 'register', component : RegisterComponent},
  {path : 'home', component : HomeComponent, canActivate: [AuthGuard] },
  {path : 'login', component : LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
