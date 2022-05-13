import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
@Component({
  selector: 'app-admin-flight',
  templateUrl: './admin-flight.component.html',
  styleUrls: ['./admin-flight.component.css']
})
export class AdminFlightComponent implements OnInit {

  constructor(private _authService:AuthService,private router:Router) { }

  airline:any;
List:any;

  ngOnInit(): void {

    
    this._authService.getairline().subscribe(
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

  Active(id:any,status:any){
    this._authService.Cancelairline(id,status).subscribe(
      (response:any) => {
        
          console.log(response);
          const user = response;
          if (user !="No Data Found") {
            this.List=response;
            console.log(this.List); 
            if(status=='Active')
            this.showalert("De-activated Successfully","success", "/airline");
            else
            this.showalert("Activated Successfully","success", "/airline");
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
