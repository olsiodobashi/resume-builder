import { Component, Input } from '@angular/core';
import { ResumeModel } from 'src/app/models/resume.model';

@Component({
  selector: 'app-base-template',
  template: ''
})
export class BaseTemplateComponent {

  @Input()
  public resume: ResumeModel;

  @Input()
  public profilePic: string;

  constructor() { }

}
