var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './user';
import * as $ from 'jquery';
var RegisterComponent = (function () {
    function RegisterComponent() {
        this.user = new User(this.username1, this.password1, this.email1, this.phone_number1);
    }
    RegisterComponent.prototype.ngAfterViewInit = function () {
        var register = {
            username: '',
            password: '',
            email: '',
            phoneNumber: 0,
        };
        $("#registerButton").click(function () {
            register.username = $('#username').val();
            register.password = $('#password').val();
            register.email = $('#email').val();
            register.phoneNumber = +$('#phoneNumber').val();
            console.log(register);
            $.ajax({
                url: 'http://50.112.200.45/register',
                type: "POST",
                async: false,
                data: JSON.stringify(register),
                contentType: "application/json",
                dataType: "json",
                success: function (data) {
                    console.log('success!', data);
                }
            });
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Component({
        selector: 'register',
        templateUrl: 'register.component.html'
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=../../../../src/app/pages/register.component.js.map