/**
 * Created by DogaIster on 2017-02-04.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItineraryComponent } from './itineraryDash.component';
import { ItineraryLoginComponent } from './login.component';
import { ItineraryRegisterComponent } from './register.component';

import { ItineraryModel } from './itinerary.component';

const routes: Routes = [
    {
        path: 'about',
        data: {
            title: 'About'
        },
        children: [
            {
                path: '',
                component: ItineraryComponent,
                data: {
                    title: ''
                }
            },
            {
                path: 'register',
                component: ItineraryRegisterComponent,
                data: {
                    title: 'Registration'
                }
            },
            {
                path: 'login',
                component: ItineraryLoginComponent,
                data: {
                    title: 'Login'
                }
            }
        ]

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ItineraryRoutingModule {}
