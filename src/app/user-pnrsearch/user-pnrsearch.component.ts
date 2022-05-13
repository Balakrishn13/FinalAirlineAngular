import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { PNR,PNRSearch } from '../models/airline.model';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-user-pnrsearch',
  templateUrl: './user-pnrsearch.component.html',
  styleUrls: ['./user-pnrsearch.component.css']
})
export class UserPnrsearchComponent implements OnInit {

  pnr:any;
  List:any;
  userid:any;
  pnrdata:any;
  user=new PNR();
  get=new PNRSearch();
singledata:any;

  constructor(private router:Router,private _airlineservice:AirlineService,private formbulider: FormBuilder) { }

  Data(): PNR {
    this.userid=localStorage.getItem("UserID")
    this.user.UserId=this.userid;
    return this.user;
  }


  PNRData(): PNRSearch {   
    this.get.PNR=this.pnrdatanumber.value
    return this.get;
  }

  ngOnInit(): void {
    this.pnr = this.formbulider.group({
      pnrdatanumber:['', [Validators.required]]
    });    
    const user=this.Data();
    this._airlineservice.getpnr(user).subscribe(
      (response:any) => {
      
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
            this.List=response;
            console.log(this.List);
          }
          else
          {
            //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
          }
      },
      (err:any)=>{       
console.log(err.statuscode);
        //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
      }
  );
  }

  get f(){
    return this.pnr.controls;
  }
  get pnrdatanumber() {
    return this.pnr.get('pnrdatanumber') as FormControl;
  }

  onSubmit()
  {
        const user=this.PNRData();
    var pnrnumber=user.PNR;
    this._airlineservice.pnsearch(pnrnumber).subscribe(
      (response:any) => {
       
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
            this.pnrdata=response;
this.singledata=this.pnrdata[0];
            console.log(this.pnrdata);
            console.log(this.singledata); 
            var d=this.singledata.FlightId;
            console.log(d);      
          }
          else
          {
            //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
          }
      },
      (err:any)=>{
       
console.log(err.statuscode);
        //this.showalert("Data Not Fount","warning", this.router.navigate(['/login']));
      }
  );

  }

}
