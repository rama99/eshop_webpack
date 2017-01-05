var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// third party module
import { ToastModule } from 'ng2-toastr/ng2-toastr';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { CartComponent } from './cart.component';
import { AboutComponent } from './about.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { OrderDetailsComponent } from './order-details.component';
import { ProductSearchComponent } from './product-search.component';
// services
import { AppService } from './app.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule,
            ReactiveFormsModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent },
                { path: 'acategories/:id/products/:pid', component: ProductComponent },
                //{path:'acategories/productsx/:pid' , component:ProductComponent},
                { path: 'acategories/:id/products', component: ProductsComponent },
                { path: 'acart', component: CartComponent },
                { path: 'about', component: AboutComponent },
                { path: 'aorders', component: OrderDetailsComponent },
                { path: 'asearch', component: ProductSearchComponent },
                { path: '**', component: PageNotFoundComponent }
            ]),
            ToastModule],
        exports: [],
        providers: [AppService, Title],
        declarations: [AppComponent, HomeComponent, ProductsComponent, ProductComponent, CartComponent,
            AboutComponent,
            PageNotFoundComponent,
            OrderDetailsComponent,
            ProductSearchComponent],
        bootstrap: [AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map