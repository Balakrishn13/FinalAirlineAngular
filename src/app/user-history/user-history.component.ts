import { Component, OnInit } from '@angular/core';
import { PNR,PNRSearch } from '../models/airline.model';
import { AirlineService } from '../services/airline.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {
  Bookinghistory:any;
  List:any;
  userid:any;
  user=new PNR();
  constructor(private router:Router,private _airlineservice:AirlineService) { }

  Data(): PNR {
    this.userid=localStorage.getItem("UserID")
    this.user.UserId=this.userid;
    return this.user;
  }

  ngOnInit(): void {
    const user=this.Data();
    this._airlineservice.getuserdata(user).subscribe(
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

  onSubmit(){

  }

}
