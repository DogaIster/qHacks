var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by DogaIster on 2017-02-04.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { config } from './appconfig';
import 'rxjs/add/operator/toPromise';
import { Router } from "@angular/router";
var ItineraryService = (function () {
    function ItineraryService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.itineraryUrl = 'api/data';
    }
    ItineraryService.prototype.getElementItinerary = function (element) {
        var params = new URLSearchParams();
        var parameters = element.itineraryData[0];
        for (var param in parameters) {
            params.set(param, parameters[param]);
        }
        var endpoint0 = config[element.endpoint];
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var data = { metricName: element.metricName, predicates: element.predicates, parameters: element.itineraryData[0] };
        if (endpoint0.method === "post") {
            return this.http.post(endpoint0.url, data, headers).toPromise().then(function (response) { return JSON.parse(response['_body']); }).catch(function (err) {
                console.log("we got " + err.json());
            });
        }
    };
    return ItineraryService;
}());
ItineraryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Router])
], ItineraryService);
export { ItineraryService };
//# sourceMappingURL=/Users/DogaIster/Desktop/OneDrive/qHacks/new_UI/Angular2_CLI_Full_Project/src/Itinerary/data.service.js.map