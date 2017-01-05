import { Component , OnInit } from '@angular/core';
import { Observable } from  'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Order } from './viewModels/Order';
import { AppService } from './app.service';

@Component({   
selector:'',
templateUrl:'./app/order-details.component.html'
})

export class OrderDetailsComponent implements  OnInit {

    private orders:Array<Order>;
    constructor(private appservice:AppService , private toaster:ToastsManager) { }

    ngOnInit() 
    {
        this.appservice.getOrders().subscribe({
                                        next: (data) => { this.orders = data },
                                        error: (err) => { this.toaster.error(err) }
                                        });
    }

}