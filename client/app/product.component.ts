import { Component , OnInit } from '@angular/core';
import { ActivatedRoute , Router  } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/switchMap";

// third party
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AppService } from './app.service';
import { Product } from './viewModels/product';


@Component({
selector:'',
templateUrl:'./app/product.component.html'

})

export class ProductComponent implements OnInit {

product:Product;
constructor(private appService: AppService , private router:Router , private route:ActivatedRoute,private toastr: ToastsManager) {}

ngOnInit() {

    let id:string;
    let pid:string;
   
    this.route.params.forEach( (params) => {
        id = params['id'];
        pid = params['pid'];
        
        $.blockUI();
        this.appService.GetProduct(id,pid).subscribe({next: data => {  $.unblockUI(); this.product = data;},
                                                      error: err => {  $.unblockUI(); this.toastr.error(err) }              
    });
    })
    
}

onAddToCart(product: Product) {    
    this.appService.AddTocart(product);
    this.toastr.success('Added to your bag!', 'Success!');
}


}