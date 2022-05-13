import { Component, OnInit } from '@angular/core';
import { Discount } from '../models/airline.model';
import { AbstractControl, FormBuilder, FormGroup, Validators,FormControl, ValidationErrors } from '@angular/forms';
import { AirlineService } from '../services/airline.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-admin-adddiscount',
  templateUrl: './admin-adddiscount.component.html',
  styleUrls: ['./admin-adddiscount.component.css']
})
export class AdminAdddiscountComponent implements OnInit {

  constructor(private _authservice:AuthService,private formbulider: FormBuilder,private router:Router) { }
  adddiscount:any;
  discountdata=new Discount();
  ngOnInit(): void {
    this.adddiscount = this.formbulider.group({
      Coupon: ['', [Validators.required]],
      Discount: ['', [Validators.required]]    
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

  get f(){
    return this.adddiscount.controls;
  }

  get Coupon() {
    return this.adddiscount.get('Coupon') as FormControl;
  }
  get Discount() {
    return this.adddiscount.get('Discount') as FormControl;
  }
  Data(): Discount {
    this.discountdata.DName=this.Coupon.value;
    this.discountdata.DPrice=this.Discount.value;    
     return this.discountdata;    
    }

  onSubmit(){
    const dis=this.Data();
    this._authservice.adddiscount(dis).subscribe(
      (response:any) => {
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
             
              this.showalert("Discount Added Successfully!","success", '/discount');
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
