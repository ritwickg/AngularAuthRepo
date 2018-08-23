import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthUserService } from "src/app/auth-user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor(private fb : FormBuilder, private loginSvc : AuthUserService, private router : Router) 
  { 

  }
  login()
  {
    let data : string = JSON.stringify(this.loginForm.value);
    this.loginSvc.authUser('https://localhost:44339/api/Account/Login', data).subscribe(data => {
      if(data.access_token)
        {
          sessionStorage.setItem('user_email',data.email);
          sessionStorage.setItem('web_token',data.access_token);
          this.router.navigate(['home']);
        }
      
    }, error =>
    {
      alert("Invalid");
      console.log(error);
    });
  }
  ngOnInit() {
    
    this.loginForm = this.genFormInit();
  }
  genFormInit() : FormGroup
  {
    return this.fb.group({
      userName : ['',[Validators.required]],
      password : ['',[Validators.required]]
    });
  }
}
