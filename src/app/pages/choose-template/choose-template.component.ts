import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ResumeModel } from 'src/app/models/resume.model';
import { TemplateModel } from 'src/app/models/template.model';
import { TemplateService } from 'src/app/templates/services/template.service';

@Component({
    selector: 'app-choose-template',
    templateUrl: './choose-template.component.html',
    styleUrls: ['./choose-template.component.scss']
})
export class ChooseTemplateComponent implements OnInit {

    public formData: ResumeModel;
    public selectedTemplate: TemplateModel;

    @ViewChild('templateHost', {
        static: true,
        read: ViewContainerRef
    }) viewContainerRef: ViewContainerRef;

    constructor(
        private templateService: TemplateService
    ) { }

    public ngOnInit(): void {
        const formData = JSON.parse(localStorage.getItem('resumeData'));
        this.formData = formData as ResumeModel;
    }

    public onTemplateSelected(template: TemplateModel): void {
        this.viewContainerRef.clear();
        const factory = this.templateService.resolveTemplate(template);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.instance.resume = this.formData;
        ref.instance.profilePic = JSON.parse(localStorage.getItem('profilePic'));
        ref.changeDetectorRef.detectChanges();
        this.selectedTemplate = template;
    }

    public print(): void {
        window.print();
    }

}
