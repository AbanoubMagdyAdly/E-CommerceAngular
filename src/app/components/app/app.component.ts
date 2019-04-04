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
  constructor(private router : Router,private stream: StreamService) { 
    // this.name = localStorage.getItem('name');
    this.stream.getName().subscribe(res => this.name=res);
  }
  logout(){
    localStorage.removeItem('name');
    this.stream.setName(localStorage.getItem('name'));
    this.router.navigate(['']);
    }
}
