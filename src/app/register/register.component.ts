import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { AirlineService } from '../services/airline.service';
import { Register } from '../models/register.model';
import { AuthService } from '../services/auth.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  userSubmitted!: boolean;
  user=new  Register();
  registrationForm:any;
  constructor(private _authService:AuthService,private formbulider: FormBuilder,) { }

  ngOnInit(): void {
    this.createUser();/*,this.passwordMatchingValidator);*/


  }
   createUser() {
    this.registrationForm = this.formbulider.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      // Address: ['', [Validators.required]],
      // Country: ['', [Validators.required]],
      // State: ['', [Validators.required]],
      // City: ['', [Validators.required]],
      // Pincode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{6}')])]
    }, { validators: this.passwordMatchingValidatior });
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

  onSubmit(  )
  {
    const register=this.userData();
    console.log(register);
   
    this._authService.register(register).subscribe(
      (response:any) => {
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
              this.showalert("user register successfully!","success", '/login');
          }
          else
          {
            this.showalert("Data Not Fount","warning", '');
          }
      },
      (err:any)=>{
        this.showalert("something went wronge!","warning", "");
      }
  );



  }
  
  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? "" :
        {notmatched: true};
}

  onReset() {
    this.userSubmitted = false;
    this.registrationForm.reset();
}


userData(): Register {
     this.user.Name= this.name.value;
     this.user.Email= this.email.value;
     this.user.UserName= this.email.value;
     this.user.Password= this.password.value;
     this.user.Mobile=this.Mobile.value
     this.user.Status=true;
     this.user.Createat= new Date();
  return this.user;
}


  get f(){
    return this.registrationForm.controls;
  }

  get name() {
    const c=this.registrationForm.get('name') as FormControl;
    console.log(c.value);
    return this.registrationForm.get('name') as FormControl;

}

get email() {
    return this.registrationForm.get('email') as FormControl;
}
get password() {
    return this.registrationForm.get('password') as FormControl;
}
get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
}
get Mobile() {
    return this.registrationForm.get('Mobile') as FormControl;
}

}
