import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminFlightComponent } from './admin-flight/admin-flight.component';
import { AdminAddairlineComponent } from './admin-addairline/admin-addairline.component';
import { AdminFlightmodelComponent } from './admin-flightmodel/admin-flightmodel.component';
import { AdminAddflightComponent } from './admin-addflight/admin-addflight.component';
import { UserflightComponent } from './userflight/userflight.component';
import { UserPnrsearchComponent } from './user-pnrsearch/user-pnrsearch.component';
import { UserPnrdeleteComponent } from './user-pnrdelete/user-pnrdelete.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { AdminDiscountComponent } from './admin-discount/admin-discount.component';
import { AdminAdddiscountComponent } from './admin-adddiscount/admin-adddiscount.component';
import { UserHistoryComponent } from './user-history/user-history.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'airline', component:AdminFlightComponent },
  { path: 'addairline', component:AdminAddairlineComponent },
  { path: 'flight', component:AdminFlightmodelComponent },
  { path: 'addflight', component:AdminAddflightComponent },
  { path: 'uflight', component: UserflightComponent},
  { path: 'pnrsearch', component: UserPnrsearchComponent},
  { path: 'pnrdelete', component: UserPnrdeleteComponent},
  { path: 'booking', component: UserBookingComponent},
  { path: 'discount', component: AdminDiscountComponent},
  { path: 'adddiscount', component: AdminAdddiscountComponent},
  { path: 'bookingdata', component: UserHistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
