var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartJSComponent } from './chartjs.component';
import { ChartJSRoutingModule } from './chartjs-routing.module';
var ChartJSModule = (function () {
    function ChartJSModule() {
    }
    return ChartJSModule;
}());
ChartJSModule = __decorate([
    NgModule({
        imports: [
            ChartJSRoutingModule,
            ChartsModule
        ],
        declarations: [ChartJSComponent]
    })
], ChartJSModule);
export { ChartJSModule };
//# sourceMappingURL=/Users/DogaIster/Desktop/OneDrive/qHacks/new_UI/Angular2_CLI_Full_Project/src/app/chartjs/chartjs.module.js.map