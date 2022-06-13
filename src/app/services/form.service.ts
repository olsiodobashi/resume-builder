import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor() { }

    public newFormGroup<T>(name: string, value?: any): FormGroup {
        let formGroup: FormGroup;

        switch (name) {
            case 'education':
                formGroup = new FormGroup({
                    institutionName: new FormControl(value?.institutionName || ''),
                    duration: new FormGroup({
                        from: new FormControl(value?.duration?.from || ''),
                        to: new FormControl(value?.duration?.to || ''),
                    }),
                    degree: new FormControl(value?.degree || ''),
                });
                break;

            case 'work':
                formGroup = new FormGroup({
                    position: new FormControl(value?.position || ''),
                    company: new FormGroup({
                        name: new FormControl(value?.company?.name || ''),
                        address: new FormControl(value?.company?.address || ''),
                        phoneNumber: new FormControl(value?.company?.phoneNumber || ''),
                        reference: new FormControl(value?.company?.reference || '')
                    }),
                    duration: new FormGroup({
                        from: new FormControl(value?.duration?.from || ''),
                        to: new FormControl(value?.duration?.to || ''),
                    }),
                    description: new FormControl(value?.description || ''),
                });
                break;

            case 'skills':
                formGroup = new FormGroup({
                    name: new FormControl(value?.name || ''),
                    value: new FormControl(value?.value || ''),
                });
                break;

            case 'certifications':
                formGroup = new FormGroup({
                    name: new FormControl(value?.name || ''),
                    acquired: new FormControl(value?.acquired || ''),
                });
                break;

            case 'hobbies':
                formGroup = new FormGroup({
                    title: new FormControl(value?.title || ''),
                    description: new FormControl(value?.description || ''),
                });
                break;

            case 'socialLinks':
                formGroup = new FormGroup({
                    title: new FormControl(value?.title || ''),
                    url: new FormControl(value?.url || ''),
                });
                break;
            default:
                break;
        }

        return formGroup;
    }
}
