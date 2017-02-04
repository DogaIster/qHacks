/**
 * Created by DogaIster on 2017-02-04.
 */
import { ItineraryComponent } from './itinerary.component';

export class ItineraryElement{
    location: string;
    dateFrom: string;
    dateTo: string;
    itineraryData: any[];
    endpoint?:string;
    metricName?: string;
    predicates?: string[];
}
