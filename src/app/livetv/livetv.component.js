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
var LivetvComponent = (function () {
    function LivetvComponent() {
    }
    LivetvComponent.prototype.ngOnInit = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    LivetvComponent = __decorate([
        Component({
            selector: 'app-livetv',
            templateUrl: './livetv.component.html',
            styleUrls: ['./livetv.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], LivetvComponent);
    return LivetvComponent;
}());
export { LivetvComponent };
