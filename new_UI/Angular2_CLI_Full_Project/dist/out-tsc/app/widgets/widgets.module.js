var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { WidgetsComponent } from './widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';
var WidgetsModule = (function () {
    function WidgetsModule() {
    }
    return WidgetsModule;
}());
WidgetsModule = __decorate([
    NgModule({
        imports: [
            WidgetsRoutingModule,
            ChartsModule
        ],
        declarations: [WidgetsComponent]
    })
], WidgetsModule);
export { WidgetsModule };
//# sourceMappingURL=/Users/DogaIster/Desktop/OneDrive/qHacks/new_UI/Angular2_CLI_Full_Project/src/app/widgets/widgets.module.js.map