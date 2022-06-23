import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
    selector: 'app-resume-form',
    templateUrl: './resume-form.component.html',
    styleUrls: ['./resume-form.component.scss']
})
export class ResumeFormComponent implements OnInit {

    public resumeForm: FormGroup;
    public profilePic: string | ArrayBuffer;

    // TODO Refactor component

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
                this.newFormGroup('education')
            ),
            work: this.fb.array(
                this.newFormGroup('work')
            ),
            skills: this.fb.array(
                this.newFormGroup('skills')
            ),
            certifications: this.fb.array(
                this.newFormGroup('certifications')
            ),
            socialLinks: this.fb.array(
                this.newFormGroup('socialLinks')
            ),
            hobbies: this.fb.array(
                this.newFormGroup('hobbies')
            )
        });

        this.resumeForm.valueChanges.subscribe(value => {
            localStorage.setItem('resumeData', JSON.stringify(value));
        });

        const cachedFormData = JSON.parse(localStorage.getItem('resumeData'));

        if (cachedFormData) {
            console.log(cachedFormData);
            this.resumeForm.patchValue(cachedFormData);

            this.resumeForm.setControl('education', this.fb.array(this.newFormGroup('education', cachedFormData.education)));
            this.resumeForm.setControl('work', this.fb.array(this.newFormGroup('work', cachedFormData.work)));
            this.resumeForm.setControl('skills', this.fb.array(this.newFormGroup('skills', cachedFormData.skills)));
            this.resumeForm.setControl('certifications', this.fb.array(this.newFormGroup('certifications', cachedFormData.certifications)));
            this.resumeForm.setControl('socialLinks', this.fb.array(this.newFormGroup('socialLinks', cachedFormData.socialLinks)));
            this.resumeForm.setControl('hobbies', this.fb.array(this.newFormGroup('hobbies', cachedFormData.hobbies)));
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
        (this.resumeForm.get(name) as FormArray).push(
            this.formService.newFormGroup(name)
        );
    }

    public removeControl(name: string, index: number): void {
        (this.resumeForm.controls[name] as FormArray).removeAt(index);
    }

    public newFormGroup(type: string, formData?: any): any[] {
        if (formData) {
            return formData.map(group =>
                this.formService.newFormGroup(type, group)
            );
        } else {
            return [this.formService.newFormGroup(type)];
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
