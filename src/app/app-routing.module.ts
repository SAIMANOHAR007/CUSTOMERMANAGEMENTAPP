import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardviewComponent } from './cardview/cardview.component';
import { CustomersComponent } from './customers/customers.component';
import { ListviewComponent } from './listview/listview.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { MapviewComponent } from './mapview/mapview.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:"customers",component:CustomersComponent},
  {path:"CARDVIEW",component:CardviewComponent},
  {path:"LISTVIEW",component:ListviewComponent},
  {path:"mapview",component:MapviewComponent},
  {path:"About",component:AboutComponent},
  {path:"login",component:LoginpageComponent},
  {path:"orders",component:OrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
