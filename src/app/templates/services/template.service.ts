import { ComponentFactory, ComponentFactoryResolver, Injectable } from '@angular/core';
import { TemplateModel } from 'src/app/models/template.model';

@Injectable({
    providedIn: 'root'
})
export class TemplateService {

    constructor(
        private cfr: ComponentFactoryResolver
    ) { }

    public resolveTemplate(template: TemplateModel): ComponentFactory<any> {
        return this.cfr.resolveComponentFactory(template.component);
    }
}
