import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StreamService } from 'src/app/stream.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  public cartProducts;
  constructor(private http: HttpClient, private router: Router, private stream: StreamService) {
    let name = localStorage.getItem('name');
    if (name === null || name === undefined) {
      this.router.navigate(['']);
    }
    let products;
    this.stream.getProducts().subscribe(res => products = res);
    function mapToProp(data, prop) {
      return data
        .reduce((res, item) => Object
          .assign(res, {
            [item[prop]]: 1 + (res[item[prop]] || 0)
          }), Object.create(null))
        ;
    }
    let productCount = mapToProp(products, 'id')
    console.log(productCount);
    this.stream.getProducts().subscribe(res => this.cartProducts = res)
  }
  ngOnInit() {
  }

}
