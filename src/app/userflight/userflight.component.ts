import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AirlineService } from '../services/airline.service';
import { SearchFlight } from '../models/flight.model';

@Component({
  selector: 'app-userflight',
  templateUrl: './userflight.component.html',
  styleUrls: ['./userflight.component.css']
})
export class UserflightComponent implements OnInit {
  booking:any;
  user=new SearchFlight();

  fligthdata:any;

  constructor(private router:Router,private _airlineservice:AirlineService,private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.booking = this.formbulider.group({
      JDate:['', [Validators.required]],
      From:['', [Validators.required]],
      To:['', [Validators.required]]
    });
  }
  get f(){
    return this.booking.controls;
  }
  get jdate() {
    return this.booking.get('JDate') as FormControl;
  }
  get from() {
    return this.booking.get('From') as FormControl;
  }
  get to() {
    return this.booking.get('To') as FormControl;
  }
  Data(): SearchFlight {
    this.user.searchDate=this.jdate.value;
    this.user.FromLocation=this.from.value;
    this.user.ToLocation=this.to.value;
    this.user.RoundTripDate=this.jdate.value;
    return this.user;
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
    const user=this.Data();
    
    this._airlineservice.flightsearch(user).subscribe(
      (response:any) => {
        
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
            this.fligthdata=response;
            console.log(this.fligthdata);          }
          else
          {
            this.showalert("Data Not Fount","warning","");
          }
      },
      (err:any)=>{
        
console.log(err.statuscode);
this.showalert("Flights not found with the search data","warning","");
      }
  );
  }

  Bookflight(id:any)
  {
     this.router.navigate(["/booking"]);
  }


}
