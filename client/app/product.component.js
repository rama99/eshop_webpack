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
import "rxjs/add/operator/switchMap";
// third party
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppService } from './app.service';
var ProductComponent = (function () {
    function ProductComponent(appService, router, route, toastr) {
        this.appService = appService;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        var pid;
        this.route.params.forEach(function (params) {
            id = params['id'];
            pid = params['pid'];
            $.blockUI();
            _this.appService.GetProduct(id, pid).subscribe({ next: function (data) { $.unblockUI(); _this.product = data; },
                error: function (err) { $.unblockUI(); _this.toastr.error(err); }
            });
        });
    };
    ProductComponent.prototype.onAddToCart = function (product) {
        this.appService.AddTocart(product);
        this.toastr.success('Added to your bag!', 'Success!');
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Component({
        selector: '',
        templateUrl: './app/product.component.html'
    }),
    __metadata("design:paramtypes", [AppService, Router, ActivatedRoute, ToastsManager])
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map