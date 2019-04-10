import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private name: BehaviorSubject<string> = new BehaviorSubject('');
  private cartCount: BehaviorSubject<number> = new BehaviorSubject(0);
  private wishListCount: BehaviorSubject<string> = new BehaviorSubject('');
  private products: BehaviorSubject<Item[]> = new BehaviorSubject([]);

  constructor() {
    this.name.next(localStorage.getItem('name'))
    let cartproducts = JSON.parse(localStorage.getItem('cart')) || [];
    let wishListproducts = JSON.parse(localStorage.getItem('wishlist')) || [];
    this.cartCount.next(this.calculateTotalItems())
    this.wishListCount.next(wishListproducts.length)
    this.products.next(cartproducts)

  }
  setName(val?: string): void {
    this.name.next(val);
  }
  setcartCount(val?: number): void {
    this.cartCount.next(val);
  }
  setwishListCount(val?: string): void {
    this.wishListCount.next(val);
  }

  setProducts(val?: Item[]): void {
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
  calculateTotalItems(): number {
    let totalQty: number = 0;
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      cart.map(function(item: Item) {
        totalQty += item.quantity;
      });
    }
    return totalQty;
  }
}
