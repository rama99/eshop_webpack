import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule , Title } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
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
import { OrderDetailsComponent} from './order-details.component';
import { ProductSearchComponent } from './product-search.component';


// services
import { AppService } from './app.service';


@NgModule({
    imports:[ BrowserModule ,
              ReactiveFormsModule ,
              FormsModule , 
              HttpModule ,
              RouterModule.forRoot( [
                  {path:'' , component:HomeComponent},
                  {path:'acategories/:id/products/:pid' , component:ProductComponent},
                  //{path:'acategories/productsx/:pid' , component:ProductComponent},
                  {path:'acategories/:id/products' , component:ProductsComponent},                  
                  {path:'acart' , component:CartComponent},
                  {path:'about' , component:AboutComponent},
                  {path:'aorders' , component:OrderDetailsComponent},
                  {path:'asearch' , component: ProductSearchComponent},
                  {path:'**',component:PageNotFoundComponent}
              ]),
              ToastModule ],
    exports:[],
    providers:[AppService , Title],
    declarations:[ AppComponent , HomeComponent , ProductsComponent , ProductComponent , CartComponent 
                  , AboutComponent
                  , PageNotFoundComponent 
                  , OrderDetailsComponent
                  , ProductSearchComponent],
    bootstrap:[AppComponent]
})


export class AppModule { }