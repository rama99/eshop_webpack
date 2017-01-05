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
import { Title } from '@angular/platform-browser';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppService } from './app.service';
var HomeComponent = (function () {
    function HomeComponent(appService, title, toaster) {
        this.appService = appService;
        this.title = title;
        this.toaster = toaster;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title.setTitle('Home');
        this.appService.GetCategories().subscribe({ next: function (data) {
                _this.appService.categories = data;
                _this.categories = _this.appService.categories;
            },
            error: function (err) {
                _this.toaster.error(err);
            }
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        selector: '',
        templateUrl: './app/home.component.html'
    }),
    __metadata("design:paramtypes", [AppService, Title, ToastsManager])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map