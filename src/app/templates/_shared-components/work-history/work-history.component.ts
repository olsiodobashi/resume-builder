import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-work-history',
    templateUrl: './work-history.component.html',
    styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {

    @Input()
    public work: any[];

    constructor() { }

    ngOnInit(): void {
    }

}
