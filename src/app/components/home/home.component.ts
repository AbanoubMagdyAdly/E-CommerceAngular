import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StreamService } from 'src/app/stream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: object[];
  constructor(private http: HttpClient,private router : Router,private stream: StreamService) { 
    let name = localStorage.getItem('name');
    if(name===null||name===undefined){
      this.router.navigate(['']);
    }
  }
  ngOnInit() {
    this.http.get('../../../assets/products.json')
        .subscribe(data => {
        this.products = data["arrayOfProducts"];
      });
  }
  addToCart(product){
    let products = JSON.parse(localStorage.getItem('cart'))  || [];
    products.push(product);
    localStorage.setItem('cart',JSON.stringify(products))
    this.stream.setcartCount(products.length)
  }
  addToWishList(product){
    let products = JSON.parse(localStorage.getItem('wishlist')) || [];
    products.push(product);
    localStorage.setItem('wishlist',JSON.stringify(products))
    this.stream.setwishListCount(products.length)

  }

}
