import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-admin-discount',
  templateUrl: './admin-discount.component.html',
  styleUrls: ['./admin-discount.component.css']
})
export class AdminDiscountComponent implements OnInit {
  discount:any;
  List:any;
  constructor(private _authService:AuthService,private router:Router) { }

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

  ngOnInit(): void {
    this._authService.getdiscount().subscribe(
      (response:any) => {
        
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
            this.List=response;
            console.log(this.List); 
          
          }
          else
          {
            //this.showalert("Data Not Fount","warning","");
          }
      },
      (err:any)=>{
     
console.log(err.statuscode);
        //this.showalert("Something went wronge","warning", "");
      }
  );
  }
  Active(id:any,status:any){
    this._authService.Canceldisc(id,status).subscribe(
      (response:any) => {
        
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
            this.List=response;
            console.log(this.List); 
            if(status=='Active')
            this.showalert("De-activated Successfully","success", "/discount");
            else
            this.showalert("Activated Successfully","success", "/discount");
          }
          else
          {
            //this.showalert("Data Not Fount","warning","");
          }
      },
      (err:any)=>{
     
console.log(err.statuscode);
        this.showalert("Something went wronge","warning", "");
      }
  );
  }


  onSubmit(){

  }

}
