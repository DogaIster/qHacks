var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { ModalsComponent } from './modals.component';
import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
var routes = [
    {
        path: '',
        data: {
            title: 'Components'
        },
        children: [
            {
                path: 'buttons',
                component: ButtonsComponent,
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'cards',
                component: CardsComponent,
                data: {
                    title: 'Cards'
                }
            },
            {
                path: 'forms',
                component: FormsComponent,
                data: {
                    title: 'Forms'
                }
            },
            {
                path: 'modals',
                component: ModalsComponent,
                data: {
                    title: 'Modals'
                }
            },
            {
                path: 'social-buttons',
                component: SocialButtonsComponent,
                data: {
                    title: 'Social buttons'
                }
            },
            {
                path: 'switches',
                component: SwitchesComponent,
                data: {
                    title: 'Switches'
                }
            },
            {
                path: 'tables',
                component: TablesComponent,
                data: {
                    title: 'Tables'
                }
            },
            {
                path: 'tabs',
                component: TabsComponent,
                data: {
                    title: 'Tabs'
                }
            }
        ]
    }
];
var ComponentsRoutingModule = (function () {
    function ComponentsRoutingModule() {
    }
    return ComponentsRoutingModule;
}());
ComponentsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ComponentsRoutingModule);
export { ComponentsRoutingModule };
//# sourceMappingURL=/Users/DogaIster/Desktop/OneDrive/qHacks/new_UI/Angular2_CLI_Full_Project/src/app/components/components-routing.module.js.map