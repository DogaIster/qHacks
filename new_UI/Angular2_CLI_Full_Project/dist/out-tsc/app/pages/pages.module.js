var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { p404Component } from './404.component';
import { p500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { PagesRoutingModule } from './pages-routing.module';
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    NgModule({
        imports: [PagesRoutingModule],
        declarations: [
            p404Component,
            p500Component,
            LoginComponent,
            RegisterComponent
        ]
    })
], PagesModule);
export { PagesModule };
//# sourceMappingURL=/Users/DogaIster/Desktop/OneDrive/qHacks/new_UI/Angular2_CLI_Full_Project/src/app/pages/pages.module.js.map