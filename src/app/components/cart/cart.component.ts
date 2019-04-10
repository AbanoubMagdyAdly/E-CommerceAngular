import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StreamService } from 'src/app/service/stream.service';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  public cartProducts : Item[];
  constructor(private http: HttpClient, private router: Router, private stream: StreamService) {
    let name = localStorage.getItem('name');
    if (name === null || name === undefined) {
      this.router.navigate(['']);
    }
    this.stream.getProducts().subscribe(res => this.cartProducts = res)
}
  ngOnInit() {
  }

  remove(id: string): void {
    let cart: any = JSON.parse(localStorage.getItem("cart"));
    cart.map(function(item: Item) {
      if (item.product.id == id) {
        if (item.quantity <= 1) {
          cart.splice(item, 1);
        } else {
          item.quantity -= 1;
        }
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    this.stream.setProducts(cart)
    this.stream.setcartCount(this.calculateTotalItems())
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
