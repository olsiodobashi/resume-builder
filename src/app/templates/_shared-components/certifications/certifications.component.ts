import { Component, Input, OnInit } from '@angular/core';
import { Certifications } from 'src/app/models/resume.model';

@Component({
    selector: 'app-certifications',
    templateUrl: './certifications.component.html',
    styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

    @Input()
    public certifications: Certifications;

    constructor() { }

    ngOnInit(): void {
    }

}
