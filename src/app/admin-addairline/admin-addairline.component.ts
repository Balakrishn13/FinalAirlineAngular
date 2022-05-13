import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import {Airline} from '../models/airline.model';
import { AirlineService } from '../services/airline.service';

import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-admin-addairline',
  templateUrl: './admin-addairline.component.html',
  styleUrls: ['./admin-addairline.component.css']
})
export class AdminAddairlineComponent implements OnInit {

  constructor(private _airlineservice:AirlineService,private formbulider: FormBuilder,private router:Router) { }

  addairline:any;
 airlinedata=new Airline();
  ngOnInit(): void {
    this.addairline = this.formbulider.group({
      AirlineName: ['', [Validators.required]],
      ContactNumber: ['', [Validators.required]],
      ContactAddress: ['', [Validators.required]]     
    });
  }

  get AirlineName() {
    return this.addairline.get('AirlineName') as FormControl;
  }
  get ContactNumber() {
    return this.addairline.get('ContactNumber') as FormControl;
  }
  get ContactAddress() {
    return this.addairline.get('ContactAddress') as FormControl;
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

  Data(): Airline {
    this.airlinedata.AirlineName=this.AirlineName.value;
    this.airlinedata.ContactNumber=this.ContactNumber.value;
    this.airlinedata.ContactAddress=this.ContactAddress.value;
    this.airlinedata.Status=true;
    this.airlinedata.Createdat=new Date();
     return this.airlinedata;
    
    }

    get f(){
      return this.addairline.controls;
    }

  onSubmit()
  {
    const airlineData=this.Data();
    this._airlineservice.Addairline(airlineData).subscribe(
      (response:any) => {
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
             
              this.showalert("Airline Added Successfully!","success", '/airline');
          }
          else
          {
            //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
          }
      },
      (err:any)=>{
        this.showalert("Something went wronge","error", "");
      }
  );
  }

}
