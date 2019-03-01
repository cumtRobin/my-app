var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DetailComponent } from './detail.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { PicturesComponent } from './pictures/pictures.component';
import { VideoService } from './video.service';
import { VideoDragService } from './video-drag.service';
export var ROUTES = [
    { path: 'detail/:id', component: DetailComponent }
];
var DetailModule = (function () {
    function DetailModule() {
    }
    DetailModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                RouterModule.forChild(ROUTES),
                ShareModule,
                NgZorroAntdModule
            ],
            declarations: [DetailComponent, IntroduceComponent, PicturesComponent],
            providers: [VideoService, VideoDragService]
        })
    ], DetailModule);
    return DetailModule;
}());
export { DetailModule };