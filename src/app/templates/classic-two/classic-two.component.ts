import { Component } from '@angular/core';
import { BaseTemplateComponent } from '../base-template/base-template.component';

@Component({
  selector: 'app-classic-two',
  templateUrl: './classic-two.component.html',
  styleUrls: ['./classic-two.component.scss']
})
export class ClassicTwoComponent extends BaseTemplateComponent {

  constructor() {
    super();
  }

}
