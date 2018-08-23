import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthUserService } from "src/app/auth-user.service";
import { AuthGuard } from "src/app/auth.guard";
import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule
    ],
  providers: [AuthUserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
