import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { AirlineService } from '../services/airline.service';
import { AuthService } from '../services/auth.service';
import {Login, UserForLogin } from '../models/login.model';
import { Router } from '@angular/router';
import { first, switchAll } from 'rxjs';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any
  loginData=new Login();
  constructor(private _authService:AuthService,private formbulider: FormBuilder,private router:Router) { }



  ngOnInit(): void {
    this.loginForm = this.formbulider.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]]     
    });
  }
showalert(msg:string, type:string,url:any)
{
  
  if(type=="success"){
    swal('',msg,type).then(function(){
      window.location=url;
    });    
  }else{
    swal('',msg,type);
  }
}
  
  onSubmit()
  {
    const userData=this.login();
        console.log(userData);

        var lo=userData.UserName;
        if(lo=="admin")
        {
        this._authService.authUser(userData).subscribe(
            (response:any) => {
                console.log(response);
                const user = response;
                if (user !="No Data Found") {
                    localStorage.setItem('ID', user.ID??"");
                    localStorage.setItem('role', user.Name??"");
                    this.showalert("Login Success as Admin","success", '/airline');
                }
                else
                {
                  this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
                }
            },
            (err:any)=>{
              this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
            }
        );
          }
          else
          {
            this._authService.User(userData).subscribe(
              (response:any) => {
                  console.log(response);
                  const user = response;
                  if (user !="No Data Found") {
                    
                      localStorage.setItem('UserID', user.ID??"");
                      localStorage.setItem('role', user.Name??"");
                      this.showalert("Login Success as User","success", '/uflight');
                  }
                  else
                  {
                    this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
                  }
              },
              (err:any)=>{
                this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
              }
          );
          }
  }
  get f(){
    return this.loginForm.controls;
  }

  login(): Login {
this.loginData.Password=this.password.value;
this.loginData.UserName=this.email.value;

 return this.loginData;

}
get email() {
  return this.loginForm.get('email') as FormControl;
}
get password() {
  return this.loginForm.get('password') as FormControl;
}


}
