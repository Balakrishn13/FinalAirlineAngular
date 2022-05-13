import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AirlineService } from '../services/airline.service';
import { Booking } from '../models/airline.model';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {
  bookdata:any;
  bookingdata=new Booking();
  Loginid:any;
  constructor(private _airlineservice:AirlineService,private formbulider: FormBuilder,private router:Router) { }

  ngOnInit(): void {    
    this.bookdata = this.formbulider.group({
      Flightid: ['', [Validators.required]],
      From: ['', [Validators.required]],
      To: ['', [Validators.required]],
      Jdate: ['', [Validators.required]],
      Name: ['', [Validators.required]],
      Age: ['', [Validators.required]],
      Gender: ['', [Validators.required]],
      Food: ['', [Validators.required]]
       
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

  Data(): Booking {
    this.bookingdata.FlightId=this.FlightId.value;
    this.bookingdata.From=this.From.value;
    this.bookingdata.To=this.To.value;
    this.bookingdata.JourneyDate=this.Jdate.value;
    this.Loginid=localStorage.getItem("UserID");
    this.bookingdata.UserId=this.Loginid;
    this.bookingdata.Createateat=new Date();
    this.bookingdata.Name=this.Name.value;
    this.bookingdata.Age=this.Age.value;
    this.bookingdata.Gender=this.Gender.value;
    this.bookingdata.Food=this.Food.value;    
     return this.bookingdata;    
    }

  get Food() {
    return this.bookdata.get('Food') as FormControl;
  }
  get Gender() {
    return this.bookdata.get('Gender') as FormControl;
  }
  get Age() {
    return this.bookdata.get('Age') as FormControl;
  }
  get Name() {
    return this.bookdata.get('Name') as FormControl;
  }
  get Jdate() {
    return this.bookdata.get('Jdate') as FormControl;
  }
  get To() {
    return this.bookdata.get('To') as FormControl;
  }
  get f(){
    return this.bookdata.controls;
  }
  get FlightId() {
    return this.bookdata.get('Flightid') as FormControl;
  }
  get From() {
    return this.bookdata.get('From') as FormControl;
  }

  onSubmit(){
    
    const data=this.Data();
    this._airlineservice.AddBooking(data).subscribe(
      (response:any) => {
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
             
              this.showalert("Booking Added Successfully!","success", '/uflight');
          }
          else
          {
            //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
          }
      },
      (err:any)=>{
        debugger;
        this.showalert("Something went wronge","error", "");
      }
  );
  }

}
