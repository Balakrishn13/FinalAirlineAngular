import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SerachflightComponent } from './serachflight/serachflight.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { LoadFlightsComponent } from './load-flights/load-flights.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModelComponent } from './admin-model/admin-model.component';
import { AdminFlightComponent } from './admin-flight/admin-flight.component';
import { SweetAlert } from 'sweetalert/typings/core';
import { AdminFlightmodelComponent } from './admin-flightmodel/admin-flightmodel.component';
import { AdminAddairlineComponent } from './admin-addairline/admin-addairline.component';
import { AdminAddflightComponent } from './admin-addflight/admin-addflight.component';
import { UserflightComponent } from './userflight/userflight.component';
import { UserModelComponent } from './user-model/user-model.component';
import { UserPnrsearchComponent } from './user-pnrsearch/user-pnrsearch.component';
import { UserPnrdeleteComponent } from './user-pnrdelete/user-pnrdelete.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { AdminDiscountComponent } from './admin-discount/admin-discount.component';
import { AdminAdddiscountComponent } from './admin-adddiscount/admin-adddiscount.component';
import { UserHistoryComponent } from './user-history/user-history.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MessagesComponent,
    LoginComponent,
    HomeComponent,
    SerachflightComponent,
    LoadFlightsComponent,
    AdminModelComponent,
    AdminFlightComponent,
    AdminFlightmodelComponent,
    AdminAddairlineComponent,
    AdminAddflightComponent,
    UserflightComponent,
    UserModelComponent,
    UserPnrsearchComponent,
    UserPnrdeleteComponent,
    UserBookingComponent,
    AdminDiscountComponent,
    AdminAdddiscountComponent,
    UserHistoryComponent
  ],
  imports: [
    BrowserModule,
     BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,    
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }

    // { provide: RequestCache, useClass: RequestCacheWithMap },
    // httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

