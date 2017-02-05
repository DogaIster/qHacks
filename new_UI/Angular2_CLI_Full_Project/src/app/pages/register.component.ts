import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, ResponseOptions, RequestMethod, BaseRequestOptions } from '@angular/http';
import {Injectable} from '@angular/core';
import { User } from './user';
import * as $ from 'jquery';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements AfterViewInit{

  username1: any;
  password1: any;
  email1: any;
  phone_number1: any;

  user = new User(this.username1, this.password1, this.email1, this.phone_number1);

  constructor(){}

  ngAfterViewInit(){
    $('#signup').appendTo("body")
    console.log('his')
    let login = {
      name: 'henry',
      password: 'nguyen'
    }
    $.post('http://50.112.200.45/login', login, (data)=>{
      console.log('Login success:', data);
    });
  }

}
