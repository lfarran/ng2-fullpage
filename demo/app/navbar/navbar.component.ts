import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    template: require('./navbar.component.html'),
    directives: [ ]
})
export class NavbarComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }
}

