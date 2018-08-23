import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthUserService } from "src/app/auth-user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private fb : FormBuilder, private registerSvc : AuthUserService) 
  {

  }
  ngOnInit() {
    
        this.registerForm = this.generateFormOnInit();
      }
  generateFormOnInit(): FormGroup 
  {
    return this.fb.group({
      UserName : ['',[Validators.minLength(4),Validators.required]],
      FirstName : ['',[Validators.required]],
      LastName : ['',[Validators.required]],
      Age : [,[Validators.required]],
      Email : ['',[Validators.required,Validators.email]],
      Password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(100)]],
      ConfirmPassword : ['',[Validators.required]]
    });
  }

  registerForm : FormGroup ;
  
  register() : void
  {
    let data = JSON.stringify(this.registerForm.value);
    this.registerSvc.addUser(data).subscribe(data => {
      if(data.access_token)
        {
          alert("Registered");
        }
    },error => {
      console.log(error);
    });
  }
  

}
