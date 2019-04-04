import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { SignupComponent } from './components/signup/signup.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { SingleProductComponent } from './components/single-product/single-product.component';

const routes: Routes = [
  { path: ''        , component: LoginSignupComponent },
  { path: 'home'    , component: HomeComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'cart'    , component: CartComponent },
  { path: 'signup'  , component: SignupComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'product' , component: SingleProductComponent },
  { path: '**'      , component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
