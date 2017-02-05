/**
 * Created by DogaIster on 2017-02-04.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { config } from './appconfig';

import 'rxjs/add/operator/toPromise';

import { Itinerary } from './itinerary';
import {Router} from "@angular/router";
import {ItineraryElement} from "./itinerarymodels";

@Injectable()
export class ItineraryService {
    private headers = new Headers({'Content-Type':'application/json'});
    private itineraryUrl = 'api/data';

    constructor(private http: Http, private router: Router) { }

    getElementItinerary(element: ItineraryElement): Promise<any> {
        let params: URLSearchParams = new URLSearchParams();
        let parameters = element.itineraryData[0];
        for (let param in parameters){
            params.set(param, parameters[param]);
        }
        let endpoint0 = config[element.endpoint];
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let data = {metricLocation:element.metricLocation, predicates:element.predicates, parameters:element.itineraryData[0]};

        if(endpoint0.method === "post"){
            return this.http.post(endpoint0.url, data, headers).toPromise().then(
                response => JSON.parse(response['_body'])
            ).catch(
                err =>{
                    console.log("we got " + err.json());
                }
            );
        }
    }
}


