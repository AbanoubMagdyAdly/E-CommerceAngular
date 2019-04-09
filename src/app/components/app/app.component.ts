import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { StreamService } from 'src/app/stream.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AngularE-commerce';
  public name;
  public cartCount;
  public wishListCount;
  constructor(private router: Router, private stream: StreamService) {
    // this.name = localStorage.getItem('name');
    this.stream.getName().subscribe(res => this.name = res);
    this.stream.getcartCount().subscribe(res => this.cartCount = res);
    this.stream.getwishListCount().subscribe(res => this.wishListCount = res);

  }
  logout() {
    localStorage.removeItem('name');
    this.stream.setName(localStorage.getItem('name'));
    this.router.navigate(['']);
  }
}
