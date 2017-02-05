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
export class RegisterComponent implements AfterViewInit {

    username1: any;
    password1: any;
    email1: any;
    phone_number1: any;

    user = new User(this.username1, this.password1, this.email1, this.phone_number1);

    constructor() { }

  ngAfterViewInit(){
    $('#signup').appendTo("body")
    console.log('his')

    let register = {
      username: '',
      password: '',
      email: '',
      phoneNumber: 0,
    }
  
        $("#registerButton").click(() => {
          register.username = $('#username').val();
          register.password = $('#password').val();
          register.email = $('#email').val();
          register.phoneNumber = +$('#phoneNumber').val();
          console.log(register);
          $.ajax({
              url: 'http://50.112.200.45/register',
              type: "POST",
              async: false,
              data: JSON.stringify(register),
              contentType: "application/json",
              dataType: "json",
              success: function(data) {
                console.log('success!', data);
              }
          });
        });
    }
}
