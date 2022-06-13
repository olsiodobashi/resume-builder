import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-history',
  templateUrl: './education-history.component.html',
  styleUrls: ['./education-history.component.scss']
})
export class EducationHistoryComponent {

  @Input()
  public education: any[];

  constructor() { }

}
