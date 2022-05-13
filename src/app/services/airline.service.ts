import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { Register } from '../models/register.model';
import { environment } from '../../environments/environment';
import { Airline,Flight,PNR,Booking } from '../models/airline.model';
import { SearchFlight } from '../models/flight.model';

const baseUrl =environment.appRoot;



@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('AirlineService');
   }
   Addairline(airline: Airline):Observable<any> {
     
     console.log(airline);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post((baseUrl+'/airline/register'),airline,httpOptions) .pipe();
  }
  AddBooking(booking: Booking):Observable<any> {
     
    
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
   return this.http.post((baseUrl+'/Booking'),booking,httpOptions) .pipe();
 }
  Addflight(flight: Flight):Observable<any> {
   
    console.log(flight);
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
   return this.http.post((baseUrl+'/airline/inventory/add'),flight,httpOptions) .pipe();
 }
 getpnr(user:PNR):Observable<any> {   
  console.log(user);
 const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
 return this.http.post((baseUrl+'/getpnr'),user,httpOptions) .pipe();
}

getuserdata(user:PNR):Observable<any> {   
  console.log(user);
 const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
 return this.http.post((baseUrl+'/getuserdata'),user,httpOptions) .pipe();
}

pnsearch(pnr:any):Observable<any> {   
  console.log(pnr);
 const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
 return this.http.get((baseUrl+'/ticket/'+pnr),httpOptions) .pipe();
}
flightsearch(flight:SearchFlight):Observable<any> {   
  console.log(flight);
 const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
 return this.http.post((baseUrl+'/search'),flight,httpOptions) .pipe();
}
Cancelpnr(pnr:any):Observable<any> {   
  console.log(pnr);
 const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
 return this.http.delete((baseUrl+'/booking/cancel/'+pnr),httpOptions) .pipe();
}

}
