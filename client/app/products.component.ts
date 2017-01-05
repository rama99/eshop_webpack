import { Component , OnInit  } from '@angular/core';
import { AppService } from './app.service';
import { Router , ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Product } from './viewModels/product';

@Component({    
    selector:'',
    templateUrl:'./app/products.component.html'
})

export class ProductsComponent implements  OnInit{

    products$:Observable<Array<Product>>;
    categoryID:string

    constructor( private title:Title , private appService:AppService , private router:Router , 
                 private route:ActivatedRoute , private toaster:ToastsManager) { }

    ngOnInit() 
    {
        //let categoryID;       
        this.route.params.forEach( (params) => {
            this.categoryID = params['id'];            
            this.title.setTitle(this.categoryID);
            this.products$ = this.appService.GetProducts(this.categoryID);
        });        
       
    }  

}