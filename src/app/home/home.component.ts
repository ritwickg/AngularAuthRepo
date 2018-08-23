import { Component, OnInit } from '@angular/core';
import { AuthUserService } from "src/app/auth-user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userEmail : string;
  constructor(private authUser : AuthUserService,private router : Router)
  {

  }
  logout()
  {
    if(sessionStorage.getItem('web_token') && sessionStorage.getItem('user_email'))
      {
        sessionStorage.removeItem('web_token');
        sessionStorage.removeItem('user_email');
        this.router.navigate(['login']);
      }
   

  }
  ngOnInit() {
    if(sessionStorage.getItem('user_email'))
      {
        this.userEmail = sessionStorage.getItem('user_email'); 
      }
  }

}
