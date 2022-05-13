import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

import { environment } from '../../environments/environment';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Discount } from '../models/airline.model';

const baseUrl =environment.appRoot;

@Injectable({
    providedIn: 'root'
})

export class AuthService {

  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('AirlineService');
   }

    authUser(user: Login):Observable<any> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post((baseUrl+'/admin/login'),user,httpOptions) .pipe();
    }
    User(user: Login):Observable<any> {
      
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post((baseUrl+'/user/login'),user,httpOptions) .pipe();
    }

    getairline():Observable<any> {
     
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.get((baseUrl+'/airline/getairline'),httpOptions) .pipe();
    }
    getflight():Observable<any> {
      
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.get((baseUrl+'/airline/getflight'),httpOptions) .pipe();
    }
    getdiscount():Observable<any> {
      
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.get((baseUrl+'/airline/getdiscount'),httpOptions) .pipe();
    }
    adddiscount(data: Discount):Observable<any> {      
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.post((baseUrl+'/airline/discount'),data,httpOptions) .pipe();
    }

    Canceldisc(Id:any,status:any):Observable<any> {   
      
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
     return this.http.delete((baseUrl+'/airline/deletediscount/'+Id+'/'+status),httpOptions) .pipe();
    }

    Cancelairline(Id:any,status:any):Observable<any> {   
      
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
     return this.http.delete((baseUrl+'/airline/deleteairline/'+Id+'/'+status),httpOptions) .pipe();
    }
    Cancelflight(Id:any,status:any):Observable<any> {   
      
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this.http.delete((baseUrl+'/airline/deleteflight/'+Id+'/'+status),httpOptions) .pipe();
     }

    register(data:Register):Observable<Register>
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post((baseUrl+'/UserRegister'),data,httpOptions) .pipe();
  }




}
