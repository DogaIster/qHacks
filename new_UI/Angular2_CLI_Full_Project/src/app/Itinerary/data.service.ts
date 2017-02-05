/**
 * Created by DogaIster on 2017-02-04.
 */
import { Injectable } from '@angular/core';
import { config } from './appconfig';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Headers, Response, ResponseOptions, RequestMethod, BaseRequestOptions } from '@angular/http';
import { User } from '../pages/user';

import 'rxjs/add/operator/toPromise';

import { Itinerary } from './itinerary';
import {Router} from "@angular/router";
import {ItineraryElement} from "./itinerarymodels";

@Injectable()
export class RegisterComponent {

  private _url = "http://50.112.200.45/register";
  constructor(private _http:Http){

     }

     user : User;
     register(user) {
       var headers = new Headers();
       headers.append('Content-Type', 'application/json');
       return this._http.post(this._url,JSON.stringify(user)).toPromise().then(response => JSON.parse(response['_body']));
     }

}
