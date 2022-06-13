import { Component } from '@angular/core';
import { BaseTemplateComponent } from '../base-template/base-template.component';

@Component({
  selector: 'app-classic-three',
  templateUrl: './classic-three.component.html',
  styleUrls: ['./classic-three.component.scss']
})
export class ClassicThreeComponent extends BaseTemplateComponent {

  constructor() {
    super();
  }

}
