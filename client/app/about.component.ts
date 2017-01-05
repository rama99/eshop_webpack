import { Component , OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
selector:'',
templateUrl:'./app/about.component.html'
})

export class AboutComponent implements OnInit{

    constructor(private title:Title) { }

    ngOnInit() {
        this.title.setTitle('About');
    }


}