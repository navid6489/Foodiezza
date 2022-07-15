import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FooterComponent } from './components/footer/footer.component';
//import { RatingModule } from 'ng-starrating';
//import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurSpecialsComponent } from './components/our-specials/our-specials.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CartService } from 'src/services/cart.service';
import { FoodService } from 'src/services/food.service';
import {FoodDetailsService} from 'src/services/food-details.service';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './components/admin/admin.component';
import { AddFoodItemComponent } from './components/add-food-item/add-food-item.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    FooterComponent,
    LogInComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    OurSpecialsComponent,
    CartComponent,
    CheckoutComponent,
    FilterPipe,
    AdminComponent,
    AddFoodItemComponent,
    WishlistComponent,
    InvoiceComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressAnimation: 'increasing',
      progressBar:true,
      positionClass:"toast-top-center"
    })   //NgModule
   
  ],
  providers: [CartService,FoodService,FoodDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
