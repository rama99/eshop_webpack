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
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppService } from './app.service';
var ProductSearchComponent = (function () {
    function ProductSearchComponent(service, route, router, toaster) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.toaster = toaster;
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.search = params['search'];
            _this.service.searchProducts(_this.search).subscribe({
                next: function (data) {
                    _this.products = data;
                },
                error: function (err) { _this.toaster.error(err); }
            });
        });
    };
    return ProductSearchComponent;
}());
ProductSearchComponent = __decorate([
    Component({
        selector: '',
        templateUrl: './app/product-search.component.html'
    }),
    __metadata("design:paramtypes", [AppService, ActivatedRoute, Router, ToastsManager])
], ProductSearchComponent);
export { ProductSearchComponent };
//# sourceMappingURL=product-search.component.js.map