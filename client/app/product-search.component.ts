import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router  } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';
import { Product } from './viewModels/Product';

@Component({    
selector:'',
templateUrl:'./app/product-search.component.html'
})

export class ProductSearchComponent implements OnInit {

    search:string;
    products:Array<Product>;

    constructor(private service:AppService ,  private route:ActivatedRoute , private router:Router, private toaster:ToastsManager ) {}

    ngOnInit() {        

            this.route.params.subscribe( (params) => {
            this.search = params['search'];

             this.service.searchProducts(this.search).subscribe( {
                                                    next: (data) => { 
                                                                        this.products = data;
                                                                    },
                                                    error: (err) => { this.toaster.error(err) }
                                                 });
        })      

    }

}