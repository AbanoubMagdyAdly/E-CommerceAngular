import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: object[];
  constructor(private http: HttpClient) { 
  }
  ngOnInit() {
    this.http.get('../../../assets/products.json')
        .subscribe(data => {
        this.products = data["arrayOfProducts"];
      });
  }

}
