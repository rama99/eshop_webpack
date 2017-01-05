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
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/observable/zip';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";
import { AppService } from './app.service';
//import "jquery";
//import  "block-ui";
var AppComponent = (function () {
    function AppComponent(appService, toaster, route, router, formBuilder) {
        this.appService = appService;
        this.toaster = toaster;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.cartCount = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formGroup = this.formBuilder.group({
            "search": ["", Validators.compose([Validators.required])]
        });
        this.appService.GetCategories().subscribe(function (data) {
            _this.appService.categories = data;
            _this.categories = _this.appService.categories;
            _this.cartCount = _this.appService.cart.length;
            // $("document").ready( function() {
            // $.blockUI();
            // })
        });
        this.appService.GetCartItems().subscribe({
            next: function (data) { _this.appService.cart = data; },
            error: function (err) { _this.toaster.error('cart==>' + err); }
        });
    };
    AppComponent.prototype.ngOnChanges = function () {
    };
    AppComponent.prototype.ngDoCheck = function () {
        this.cartCount = this.appService.cart.length;
    };
    AppComponent.prototype.onSearch = function () {
        //console.log('Current Route : ' , this.router.url);
        if (this.formGroup.valid) {
            this.router.navigate(['asearch', { search: this.formGroup.controls['search'].value }]);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html'
    }),
    __metadata("design:paramtypes", [AppService, ToastsManager,
        ActivatedRoute, Router, FormBuilder])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map