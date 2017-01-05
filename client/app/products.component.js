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
import { AppService } from './app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
var ProductsComponent = (function () {
    function ProductsComponent(title, appService, router, route, toaster) {
        this.title = title;
        this.appService = appService;
        this.router = router;
        this.route = route;
        this.toaster = toaster;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //let categoryID;       
        this.route.params.forEach(function (params) {
            _this.categoryID = params['id'];
            _this.title.setTitle(_this.categoryID);
            $.blockUI();
            _this.appService.GetProducts(_this.categoryID).subscribe({
                next: function (data) { $.unblockUI(); _this.products = data; },
                error: function (err) { $.unblockUI(); _this.toaster.error(err); }
            });
        });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Component({
        selector: '',
        templateUrl: './app/products.component.html'
    }),
    __metadata("design:paramtypes", [Title, AppService, Router,
        ActivatedRoute, ToastsManager])
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map