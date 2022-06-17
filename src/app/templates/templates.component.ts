import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TemplateModel } from '../models/template.model';
import { TEMPLATE_LIST } from './template-list';

@Component({
    selector: 'app-templates',
    templateUrl: './templates.component.html',
    styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

    public templates: TemplateModel[] = TEMPLATE_LIST;

    public selectedTemplate: string;

    @Output()
    public templateSelected = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        // Always select first template
        this.templateSelected.emit(this.templates[2]);
    }

    public selectTemplate(template: TemplateModel): void {
        this.selectedTemplate = template.id;
        this.templateSelected.emit(template);
    }

}
