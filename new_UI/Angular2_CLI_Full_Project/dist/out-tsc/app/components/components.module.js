var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
// Modal Component
import { ModalModule } from 'ng2-bootstrap/modal';
import { ModalsComponent } from './modals.component';
// Tabs Component
import { TabsModule } from 'ng2-bootstrap/tabs';
import { TabsComponent } from './tabs.component';
// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    NgModule({
        imports: [
            ComponentsRoutingModule,
            ModalModule.forRoot(),
            TabsModule
        ],
        declarations: [
            ButtonsComponent,
            CardsComponent,
            FormsComponent,
            ModalsComponent,
            SocialButtonsComponent,
            SwitchesComponent,
            TablesComponent,
            TabsComponent
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=/Users/DogaIster/Desktop/OneDrive/qHacks/new_UI/Angular2_CLI_Full_Project/src/app/components/components.module.js.map