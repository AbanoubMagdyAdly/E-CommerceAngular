import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl , Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  public name :any;
  PersonalForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(18)]),
    passwordConfirmation: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(18)]),
  })

  constructor(private router : Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.PersonalForm);
    if(this.PersonalForm.value['password']==this.PersonalForm.value['passwordConfirmation']){
    localStorage.setItem('name', this.PersonalForm.value['name']);
    this.router.navigate(['/home']);
    }
  }
}
