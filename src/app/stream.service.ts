import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private name: BehaviorSubject<string> = new BehaviorSubject('');
  private cartCount: BehaviorSubject<string> = new BehaviorSubject('');
  private wishListCount: BehaviorSubject<string> = new BehaviorSubject('');
  private products: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.name.next(localStorage.getItem('name'))
    let cartproducts = JSON.parse(localStorage.getItem('cart')) || [];
    let wishListproducts = JSON.parse(localStorage.getItem('wishlist')) || [];
    this.cartCount.next(cartproducts.length)
    this.wishListCount.next(wishListproducts.length)
    this.products.next(cartproducts)

  }
  setName(val?: string): void {
    this.name.next(val);
  }
  setcartCount(val?: string): void {
    this.cartCount.next(val);
  }
  setwishListCount(val?: string): void {
    this.wishListCount.next(val);
  }

  setProducts(val?: string): void {
    this.products.next(val);
  }

  getName() {
    return this.name.asObservable();
  }
  getcartCount() {
    return this.cartCount.asObservable();
  }
  getwishListCount() {
    return this.wishListCount.asObservable();
  }
  getProducts() {
    return this.products.asObservable();
  }
}
