import { Component , OnInit , OnChanges , DoCheck } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import 'rxjs/add/observable/zip';
import { ActivatedRoute ,  Router } from '@angular/router';
import { FormBuilder , FormGroup , FormControl , Validators } from "@angular/forms";

import { AppService } from './app.service';
import { Category } from './viewModels/category';

//import "jquery";
//import  "block-ui";


@Component({    
    selector:'my-app',
    templateUrl: './app/app.component.html'

})

export class AppComponent implements OnInit , OnChanges , DoCheck {

    formGroup:FormGroup;
    categories:Array<Category>;
    cartCount = 0;


    constructor(private appService:AppService , private toaster:ToastsManager , 
      private route:ActivatedRoute , private router: Router ,private formBuilder:FormBuilder ) {}

    ngOnInit() 
    {
       
       this.formGroup = this.formBuilder.group( {
           "search": ["" , Validators.compose([Validators.required])]
       })
       
       
       this.appService.GetCategories().subscribe( (data) => {
           this.appService.categories = data;
           this.categories = this.appService.categories;
           this.cartCount = this.appService.cart.length;

          // $("document").ready( function() {
              // $.blockUI();
          // })

       });  

       this.appService.GetCartItems().subscribe( {
                                                        next: (data) => { this.appService.cart = data},
                                                        error: (err) => { this.toaster.error('cart==>' + err)}

                                                    })   
      
    }

    ngOnChanges() {
       
    }

    ngDoCheck() {       
        this.cartCount = this.appService.cart.length;
    }

    onSearch() {

        //console.log('Current Route : ' , this.router.url);

        if(this.formGroup.valid) 
        {
        this.router.navigate(['asearch' , {search:this.formGroup.controls['search'].value}]);
        }
    }

}