/**
 * @author Meiblorn (Vadim Fedorenko) <meiblorn@gmail.com | admin@meiblorn.com> on 12/05/16.
 */

import {Component, Input, Output, ViewEncapsulation, provide} from '@angular/core';
import {MnFullpageDirective, MnFullpageOptions, MnFullpageService} from '../../components';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DrummingComponent } from './drumming/drumming.component';


@Component({
    selector: 'app',
    providers: [provide(MnFullpageService, {useClass: MnFullpageService})],
    directives: [MnFullpageDirective, NavbarComponent, HomeComponent, DrummingComponent],
    styles: [
        require('fullpage.js/jquery.fullPage.css'),
        require('./app.component.scss')
    ],
    encapsulation: ViewEncapsulation.None,
    template: require('./app.component.html')
})
export class AppComponent {

    @Input() public options: MnFullpageOptions = new MnFullpageOptions({
        controlArrows: false,
        scrollingSpeed: 1500,

        menu: '#menu',
        css3: true,
        anchors: ['home', 'drumming', 'recording', 'media', 'contact']
    });

    @Output() private templates = {
        install: require('raw!./templates/install.template.txt'),
        usage: require('raw!./templates/usage.template.txt'),
        slides: {
            attributes: require('raw!./templates/slide1/usage.attributes.slide.template.txt'),
            classOptions: require('raw!./templates/slide2/usage.class.options.template.txt'),
            mix: require('raw!./templates/slide3/usage.mix.template.txt')
        },
        service: require('raw!./templates/service.tempalte.txt')
    };

    constructor(/*private fullpageService: MnFullpageService*/) {
    }

}
