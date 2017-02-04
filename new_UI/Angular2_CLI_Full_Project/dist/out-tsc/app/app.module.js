var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
// Routing Module
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { AboutComponent } from './Itinerary/about.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            AppRoutingModule,
            DropdownModule.forRoot(),
            TabsModule.forRoot(),
            ChartsModule,
            RouterModule.forRoot([
                {
                    path: 'about',
                    component: AboutComponent,
                }
            ])
        ],
        declarations: [
            AppComponent,
            FullLayoutComponent,
            SimpleLayoutComponent,
            NAV_DROPDOWN_DIRECTIVES,
            BreadcrumbsComponent,
            SIDEBAR_TOGGLE_DIRECTIVES,
            AsideToggleDirective,
            AboutComponent
        ],
        providers: [{
                provide: LocationStrategy,
                useClass: HashLocationStrategy
            }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=/Users/DogaIster/Desktop/OneDrive/qHacks/new_UI/Angular2_CLI_Full_Project/src/app/app.module.js.map