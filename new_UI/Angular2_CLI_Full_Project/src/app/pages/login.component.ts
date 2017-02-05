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
  selector: 'login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements AfterViewInit{

  username1: any;
  password1: any;

  user = new User(this.username1, this.password1);
  constructor() { }

  ngAfterViewInit() {
    let login = {
      username: '',
      password: ''
    }
    $("#loginButton").click(() => {
      login.username = $('#username').val();
      login.password = $('#password').val();
      console.log(login);
      $.ajax({
        url: 'http://50.112.200.45/login',
        type: "POST",
        async: false,
        data: JSON.stringify(login),
        contentType: "application/json",
        dataType: "json",
        success: function(data) {
          console.log('success!', data);
        },
        error: function(a,b,c){
          window.location.reload(true);
          console.log(a,b,c);
      }
      });
    });
  }
}







