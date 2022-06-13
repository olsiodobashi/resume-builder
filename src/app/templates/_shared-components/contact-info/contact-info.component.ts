import { Component, Input, OnInit } from '@angular/core';
import { ResumeModel } from 'src/app/models/resume.model';

@Component({
    selector: 'app-contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

    @Input()
    public resume: ResumeModel;

    constructor() { }

    ngOnInit(): void {
    }

}
