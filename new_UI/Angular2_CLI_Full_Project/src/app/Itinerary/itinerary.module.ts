/**
 * Created by DogaIster on 2017-02-04.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ItineraryRoutingModule } from './itinerary-routing.module';
import { ItineraryLoginComponent } from './login.component';
import { DatePickerModule } from 'ng2-datepicker';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

import { ItineraryModel } from './itinerary.component';

//Local Storage, can be deleted if it mess up with other things
let LocalStorageServiceConfig = {
    prefix: 'Itinerary Dash',
    storageType: 'sessionStorage'
}

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        RouterModule,
        BrowserModule,
        ItineraryLoginComponent,
        DatePickerModule,
        NKDatetimeModule
    ],
    declarations:[],
    providers:[ItineraryLoginComponent]
})

export class ItineraryModule { }
