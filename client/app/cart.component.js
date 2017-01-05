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
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppService } from './app.service';
var CartComponent = (function () {
    function CartComponent(title, appService, formbuilder, toaster, router) {
        this.title = title;
        this.appService = appService;
        this.formbuilder = formbuilder;
        this.toaster = toaster;
        this.router = router;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Cart');
        this.cart = this.appService.cart;
        this.states = this.appService.GetStates();
        this.states.unshift("");
        this.formGroup = this.formbuilder.group({
            "firstName": ["", Validators.compose([Validators.required])],
            "lastName": ["", Validators.compose([Validators.required])],
            "address1": ["", Validators.compose([Validators.required])],
            "address2": ["", Validators.compose([Validators.required])],
            "state": ["", Validators.compose([Validators.required])],
            "zip": ["", Validators.compose([Validators.required])]
        });
    };
    CartComponent.prototype.ngDoCheck = function () {
        this.cart = this.appService.cart;
    };
    // Remove Product from Bag
    CartComponent.prototype.remove = function (idx, pid) {
        var _this = this;
        $.blockUI();
        this.appService.RemoveFromCart(pid).subscribe({
            next: function (data) { $.unblockUI(); _this.cart.splice(idx, 1); },
            error: function (err) { $.unblockUI(); _this.toaster.error(err); }
        });
    };
    CartComponent.prototype.placeOrder = function () {
        var _this = this;
        if (!this.formGroup.valid) {
            this.error = "Please enter shipping details";
        }
        else {
            $.blockUI();
            this.appService.placeOrder(this.formGroup.value).subscribe({ next: function (data) {
                    _this.appService.resetCart();
                    _this.formGroup.reset();
                    _this.toaster.success('Order Placed !!');
                    _this.router.navigate(['']);
                    $.unblockUI();
                },
                error: function (err) { $.unblockUI(); _this.toaster.error(err); }
            });
        }
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Component({
        selector: '',
        templateUrl: './app/cart.component.html'
    }),
    __metadata("design:paramtypes", [Title,
        AppService,
        FormBuilder,
        ToastsManager,
        Router])
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map