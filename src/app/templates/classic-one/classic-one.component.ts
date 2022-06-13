import { Component } from '@angular/core';
import { BaseTemplateComponent } from '../base-template/base-template.component';

@Component({
    selector: 'app-classic-one',
    templateUrl: './classic-one.component.html',
    styleUrls: ['./classic-one.component.scss']
})
export class ClassicOneComponent extends BaseTemplateComponent {

    constructor() {
        super();
    }

}
