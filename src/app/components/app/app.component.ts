import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AngularE-commerce';
  public name;
  constructor(private router : Router) { 
    this.name = localStorage.getItem('name');
  }
  logout(){
    localStorage.removeItem('name');
    this.router.navigate(['']);
    }
}
