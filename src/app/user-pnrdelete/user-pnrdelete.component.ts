import { Component, OnInit } from '@angular/core';
import { PNRSearch,PNR } from '../models/airline.model';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-user-pnrdelete',
  templateUrl: './user-pnrdelete.component.html',
  styleUrls: ['./user-pnrdelete.component.css']
})
export class UserPnrdeleteComponent implements OnInit {
  pnr:any;
  userid:any;
  user=new PNR();
  List:any;
  pnrdata:any;
  constructor(private router:Router,private _airlineservice:AirlineService,private formbulider: FormBuilder) { }
  get=new PNRSearch();

  get f(){
    return this.pnr.controls;
  }
  get pnrdatanumber() {
    return this.pnr.get('pnrdatanumber') as FormControl;
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
            console.log(this.List);          }
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
  Data(): PNR {
    this.userid=localStorage.getItem("UserID")
    this.user.UserId=this.userid;
    return this.user;
  }

  PNRData(): PNRSearch {   
    this.get.PNR=this.pnrdatanumber.value
    return this.get;
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
    const user=this.PNRData();
    var pnrnumber=user.PNR;
    this._airlineservice.Cancelpnr(pnrnumber).subscribe(
      (response:any) => {
       
          console.log(response);
          const user = response;         
            this.showalert("Successfully canceled the ticket","success", '/pnrdelete');
      },
      (err:any)=>{  
           
console.log(err.statuscode);
        this.showalert("Something went wronge","warning", '/pnrdelete');
      }
  );
  }

}
