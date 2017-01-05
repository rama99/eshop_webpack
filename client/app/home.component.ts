import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AppService } from './app.service';
import { Category } from './viewModels/category';

//import  "jquery";
//import  "block-ui";


@Component({ 
selector:'',
templateUrl:'./app/home.component.html'
})


export class HomeComponent implements OnInit {

    categories:Array<Category>;
    constructor(private appService:AppService , private title:Title , private toaster:ToastsManager) {}

    ngOnInit() {
         this.title.setTitle('Home');

         $.blockUI();
         this.appService.GetCategories().subscribe({next: (data) => {
                                                                        this.appService.categories = data;
                                                                        this.categories = this.appService.categories;
                                                                         $.unblockUI();
                                                                    },
                                                    error: (err) => {
                                                                        this.toaster.error(err);
                                                                        $.unblockUI();
                                                                    }                
         }); 
    }


}