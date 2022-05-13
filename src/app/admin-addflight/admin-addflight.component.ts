import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AirlineService } from '../services/airline.service';
import {Flight} from '../models/airline.model';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-admin-addflight',
  templateUrl: './admin-addflight.component.html',
  styleUrls: ['./admin-addflight.component.css']
})
export class AdminAddflightComponent implements OnInit {
  addflight:any;
  List:any;
  flightdata=new Flight();
  fdata:any;
constructor(private _authService:AuthService,private router:Router,private _airlineservice:AirlineService,private formbulider: FormBuilder) { }

  ngOnInit(): void {

    this.addflight = this.formbulider.group({
      AirlineId:['', [Validators.required]],
      FromDate:['', [Validators.required]],
      ToDate:['', [Validators.required]],
      FromLocation:['', [Validators.required]],
      ToLocation:['', [Validators.required]],
      Food:['', [Validators.required]],
      NoOfBUSeats:['',[Validators.required]],
      NoOfNONBUSeats:['',[Validators.required]],
      Remarks:['',[Validators.required]],
      NoOfRows:['',[Validators.required]],
      Price:['',[Validators.required]],
      Sheduled:['',[Validators.required]],
    });

    
    this._authService.getairline().subscribe(
      (response:any) => {
        debugger;
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
            this.List=response;
            console.log(this.List);          }
          else
          {
            //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
          }
      },
      (err:any)=>{
        debugger;
console.log(err.statuscode);
        //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
      }
  );
  }
  get AirlineId() {
    return this.addflight.get('AirlineId') as FormControl;
  }
  get FromDate() {
    return this.addflight.get('FromDate') as FormControl;
  }
  get ToDate() {
    return this.addflight.get('ToDate') as FormControl;
  }
  get FromLocation() {
    return this.addflight.get('FromLocation') as FormControl;
  }
  get ToLocation() {
    return this.addflight.get('ToLocation') as FormControl;
  }
  get Food() {
    return this.addflight.get('Food') as FormControl;
  }
  get NoOfBUSeats() {
    return this.addflight.get('NoOfBUSeats') as FormControl;
  }
  get NoOfNONBUSeats() {
    return this.addflight.get('NoOfNONBUSeats') as FormControl;
  }
  get Remarks() {
    return this.addflight.get('Remarks') as FormControl;
  }
  get NoOfRows() {
    return this.addflight.get('NoOfRows') as FormControl;
  }
  get Price() {
    return this.addflight.get('Price') as FormControl;
  }
  get Sheduled() {
    return this.addflight.get('Sheduled') as FormControl;
  }
  get f(){
    return this.addflight.controls;
  }

  Data(): Flight {
    this.flightdata.AirlineId=this.AirlineId.value;
    this.flightdata.FromDate=this.FromDate.value;
    this.flightdata.ToDate=this.ToDate.value;
    this.flightdata.FromLocation=this.FromLocation.value;
    this.flightdata.ToLocation=this.ToLocation.value;
    this.fdata=this.Food.value;
if(this.fdata=="veg")
{
    this.flightdata.Food=true;
}
else if(this.fdata=="non-veg")
{
    this.flightdata.Food=false;
}
this.flightdata.NoOfBUSeats=this.NoOfBUSeats.value;
this.flightdata.NoOfNONBUSeats=this.NoOfNONBUSeats.value;
this.flightdata.Remarks=this.Remarks.value;
this.flightdata.NoOfRows=this.NoOfRows.value;
this.flightdata.Price=this.Price.value;
this.flightdata.Sheduled=this.Sheduled.value;
    this.flightdata.Status=true;
    this.flightdata.Createdat=new Date();
     return this.flightdata;
    
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

  onSubmit(){
   
    const flightData=this.Data();
console.log(flightData);
this._airlineservice.Addflight(flightData).subscribe(
  (response:any) => {
      console.log(response);
      const user = response;
      if (user !="No Data Found") {
         
          this.showalert("Flight Added Successfully!","success", '/flight');
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
