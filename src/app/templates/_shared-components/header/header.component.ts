import { Component, Input, OnInit } from '@angular/core';
import { ResumeModel } from 'src/app/models/resume.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input()
    public resume: ResumeModel;

    constructor() { }

    ngOnInit(): void {
    }

}
