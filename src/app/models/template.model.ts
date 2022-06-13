import { Type } from "@angular/core";

export class TemplateModel {
    id: string;
    /**
     * The component ref
     */
    component: Type<any>;

    /**
     * Readable name
     */
    name: string;
    thumbnail: string;
    /**
     * The template's general layout
     */
    format: string;
}
