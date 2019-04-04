import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.sass']
})
export class SingleProductComponent implements OnInit {

  constructor(private http: HttpClient,private router : Router) { 
    let name = localStorage.getItem('name');
    if(name===null||name===undefined){
      this.router.navigate(['']);
    }
  }
  ngOnInit() {
  }

}
