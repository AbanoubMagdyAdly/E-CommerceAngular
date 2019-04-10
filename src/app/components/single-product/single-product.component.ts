import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { StreamService } from 'src/app/stream.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.sass']
})
export class SingleProductComponent implements OnInit {
  public product;
  public products;
  constructor(private http: HttpClient,private router : Router,private route: ActivatedRoute,private stream: StreamService) { 
    let name = localStorage.getItem('name');
    if(name===null||name===undefined){
      this.router.navigate(['']);
    }
    this.http.get('../../../assets/products.json')
        .subscribe(data => {
        this.products = data["arrayOfProducts"];
        this.product = this.products[this.getSelectedIndex(this.route.snapshot.params.id)];
        if (!this.product) {
      this.router.navigate(["notfound"]);
       }
      });
  }
  ngOnInit() {
  }
  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
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
