import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, Form } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { ResumeModel } from 'src/app/models/resume.model';
import { FormService } from 'src/app/services/form.service';

@Component({
    selector: 'app-resume-form',
    templateUrl: './resume-form.component.html',
    styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

    public resumeForm: FormGroup;
    public profilePic: string | ArrayBuffer;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private formService: FormService
    ) { }

    public ngOnInit(): void {
        this.resumeForm = this.fb.group({
            name: [, Validators.required],
            jobTitle: [],
            email: [],
            profilePic: [],
            summary: [, Validators.required],
            birthday: [, Validators.required],
            phoneNumber: [],
            location: [],

            education: this.fb.array(
                this.educationFormGroup()
            ),
            work: this.fb.array(
                this.workFormGroup()
            ),
            skills: this.fb.array(
                this.skillsFormGroup()
            ),
            certifications: this.fb.array(
                this.certificationsFormGroup()
            ),
            socialLinks: this.fb.array(
                this.socialLinksFormGroup()
            ),
            hobbies: this.fb.array(
                this.hobbiesFormGroup()
            )
        });

        this.resumeForm.valueChanges.subscribe(value => {
            localStorage.setItem('resumeData', JSON.stringify(value));
        });

        const cachedFormData = JSON.parse(localStorage.getItem('resumeData'));

        if (cachedFormData) {
            console.log(cachedFormData);
            this.resumeForm.patchValue(cachedFormData);

            this.resumeForm.setControl('education', this.fb.array(this.educationFormGroup(cachedFormData.education)));
            this.resumeForm.setControl('work', this.fb.array(this.workFormGroup(cachedFormData.work)));
            this.resumeForm.setControl('skills', this.fb.array(this.skillsFormGroup(cachedFormData.skills)));
            this.resumeForm.setControl('certifications', this.fb.array(this.certificationsFormGroup(cachedFormData.certifications)));
            this.resumeForm.setControl('socialLinks', this.fb.array(this.socialLinksFormGroup(cachedFormData.socialLinks)));
            this.resumeForm.setControl('hobbies', this.fb.array(this.hobbiesFormGroup(cachedFormData.hobbies)));
        }
    }

    public get educationArray(): FormArray {
        return this.resumeForm.controls['education'] as FormArray;
    }

    public get workArray(): FormArray {
        return this.resumeForm.controls['work'] as FormArray;
    }

    public get certificationsArray(): FormArray {
        return this.resumeForm.controls['certifications'] as FormArray;
    }

    public get skillsArray(): FormArray {
        return this.resumeForm.controls['skills'] as FormArray;
    }

    public get hobbiesArray(): FormArray {
        return this.resumeForm.controls['hobbies'] as FormArray;
    }

    public get socialLinksArray(): FormArray {
        return this.resumeForm.controls['socialLinks'] as FormArray;
    }

    public addFormArray<T>(name: string, value?: T[]): void {
        let formArray: any;

        switch (name) {
            case 'education':
                formArray = this.educationFormGroup(value);
                break;
            case 'work':
                formArray = this.workFormGroup(value);
                break;
            case 'hobbies':
                formArray = this.hobbiesFormGroup(value);
                break;
            case 'socialLinks':
                formArray = this.socialLinksFormGroup(value);
                break;
            case 'skills':
                formArray = this.skillsFormGroup(value);
                break;
            case 'certifications':
                formArray = this.certificationsFormGroup(value);
                break;
            default:
                break;
        }

        (this.resumeForm.get(name) as FormArray).push(
            this.formService.newFormGroup(name)
        );
    }

    public educationFormGroup(formData?: any): any[] {
        if (formData) {
            return formData.map(group =>
                this.formService.newFormGroup('education', group)
            );
        } else {
            return [this.formService.newFormGroup('education')];
        }
    }

    public workFormGroup(formData?: any[]): any[] {
        if (formData) {
            return formData.map(group =>
                this.formService.newFormGroup('work', group)
            );
        } else {
            return [
                this.formService.newFormGroup('work')
            ];
        }
    }

    public skillsFormGroup(formData?: any[]): any[] {
        if (formData) {
            return formData.map(group =>
                this.formService.newFormGroup('skills', group)
            );
        } else {
            return [
                this.formService.newFormGroup('skills')
            ];
        }
    }

    public certificationsFormGroup(formData?: any[]): any[] {
        if (formData) {
            return formData.map(group =>
                this.formService.newFormGroup('certifications', group)
            );
        } else {
            return [
                this.formService.newFormGroup('certifications')
            ];
        }
    }

    public hobbiesFormGroup(formData?: any[]): any[] {
        if (formData) {
            return formData.map(group =>
                this.formService.newFormGroup('hobbies', group)
            );
        } else {
            return [
                this.formService.newFormGroup('hobbies')
            ];
        }
    }

    public socialLinksFormGroup(formData?: any[]): any[] {
        if (formData) {
            return formData.map(group =>
                this.formService.newFormGroup('socialLinks', group)
            );
        } else {
            return [
                this.formService.newFormGroup('socialLinks')
            ];
        }
    }

    public onProfilePicUpload(event: any): void {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (() => {
            const preview = reader.result;
            this.profilePic = preview;
            localStorage.setItem('profilePic', JSON.stringify(this.profilePic));
        });
    }

    public onSubmit(): void {
        console.log(this.resumeForm.value);
        this.router.navigateByUrl('/choose-template');
    }

    public reset(stepper: MatStepper): void {
        const resetForm = confirm('This will clear all the information you\'ve entered. Proceed?');

        if (resetForm) {
            stepper.reset();
            this.resumeForm.reset();
        }
    }
}
