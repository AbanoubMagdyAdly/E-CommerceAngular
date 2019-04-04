import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private http: HttpClient,private router : Router) { 
    let name = localStorage.getItem('name');
    if(name===null||name===undefined){
      this.router.navigate(['']);
    }
  }
  ngOnInit() {
  }

}
