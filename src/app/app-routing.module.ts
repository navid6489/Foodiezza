import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { OurSpecialsComponent } from './components/our-specials/our-specials.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddFoodItemComponent } from './components/add-food-item/add-food-item.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"log-in",component:LogInComponent},
  {path:"our-specials",component:OurSpecialsComponent},
  {path:"about",component:AboutComponent},
  {path:"cart",component:CartComponent},
  {path:"contact",component:ContactComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"admin",component:AdminComponent},
  {path:"addfooditem",component:AddFoodItemComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"invoice",component:InvoiceComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule,
BrowserModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
