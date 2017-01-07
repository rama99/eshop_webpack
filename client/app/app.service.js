var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/of';
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.cart = [];
        this.states = [];
        this.total = 0;
    }
    // Get all categories
    AppService.prototype.GetCategories = function () {
        return this.http.get('./categories')
            .map(function (data) { console.log(data.headers.toJSON()); return data.json(); })
            .catch(this.handleError);
    };
    // Get all Products
    AppService.prototype.GetProducts = function (categoryID) {
        return this.http.get('./categories/' + categoryID + '/products')
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    // Get Product
    AppService.prototype.GetProduct = function (id, pid) {
        return this.http.get('./categories/' + id + '/products/' + pid)
            .map(function (data) {
            var headers = data.headers;
            // this.csrfToken = headers.get('_csrf') ; 
            return data.json();
        })
            .catch(this.handleError);
    };
    // Add an item to cart
    AppService.prototype.AddTocart = function (product) {
        var _this = this;
        var item = { pid: product._id, name: product.name, price: product.price, qty: 1, total: product.price };
        //this.cart.push(item);
        // make an AJAX call to save the item in server session
        var url = './cart/add';
        var headers = new Headers({ 'Content-Type': 'application/json', '_csrf': this.csrfToken });
        var requestOptions = new RequestOptions({ headers: headers });
        this.http.post(url, item, requestOptions)
            .map(function (data) {
            _this.cart.push(item);
        })
            .catch(this.handleError)
            .subscribe(function (data) { });
    };
    // Remove an item from cart
    AppService.prototype.RemoveFromCart = function (pid) {
        var url = './cart/remove/' + pid;
        return this.http.delete(url)
            .catch(this.handleError);
    };
    // Get Cart Items
    AppService.prototype.GetCartItems = function () {
        var url = "./cart/";
        return this.http.get(url)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    // Return all states
    AppService.prototype.GetStates = function () {
        return ["Andaman and Nicobar Islands",
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chandigarh",
            "Chhattisgarh",
            "Dadra and Nagar Haveli",
            "Daman and Diu",
            "Delhi",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jammu and Kashmir",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Lakshadweep",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Orissa",
            "Pondicherry",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttaranchal",
            "Uttar Pradesh",
            "West Bengal"];
    };
    // place Order
    AppService.prototype.placeOrder = function (ShippingDetails) {
        var url = './cart/order';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(url, ShippingDetails, options)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    AppService.prototype.getOrders = function () {
        var url = './orders';
        return this.http.get(url)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    AppService.prototype.searchProducts = function (search) {
        var url = "./products?search=" + search;
        return this.http.get(url)
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    // reset the cart
    AppService.prototype.resetCart = function () {
        this.cart = [];
    };
    // Error Handler
    AppService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure           
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return AppService;
}());
AppService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AppService);
export { AppService };
//# sourceMappingURL=app.service.js.map