import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ChooseTemplateComponent } from './pages/choose-template/choose-template.component';
import { ResumeFormComponent } from './pages/resume-form/resume-form.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { TemplatesComponent } from './templates/templates.component';
import { HeaderComponent } from './templates/_shared-components/header/header.component';
import { WorkHistoryComponent } from './templates/_shared-components/work-history/work-history.component';
import { EducationHistoryComponent } from './templates/_shared-components/education-history/education-history.component';
import { AboutSectionComponent } from './templates/_shared-components/about-section/about-section.component';
import { InfoSectionComponent } from './templates/_shared-components/info-section/info-section.component';
import { ClassicOneComponent } from './templates/classic-one/classic-one.component';
import { TemplateService } from './templates/services/template.service';
import { ClassicTwoComponent } from './templates/classic-two/classic-two.component';
import { SocialLinksComponent } from './templates/_shared-components/social-links/social-links.component';
import { SkillsComponent } from './templates/_shared-components/skills/skills.component';
import { FullNameSplitDirective } from './directives/full-name-split.directive';
import { ContactInfoComponent } from './templates/_shared-components/contact-info/contact-info.component';
import { CertificationsComponent } from './templates/_shared-components/certifications/certifications.component';
import { ClassicThreeComponent } from './templates/classic-three/classic-three.component';
import { BaseTemplateComponent } from './templates/base-template/base-template.component';

@NgModule({
    declarations: [
        AppComponent,
        ResumeFormComponent,
        ChooseTemplateComponent,
        GetStartedComponent,
        TemplatesComponent,
        HeaderComponent,
        WorkHistoryComponent,
        EducationHistoryComponent,
        AboutSectionComponent,
        InfoSectionComponent,
        ClassicOneComponent,
        ClassicTwoComponent,
        SocialLinksComponent,
        SkillsComponent,
        FullNameSplitDirective,
        ContactInfoComponent,
        CertificationsComponent,
        ClassicThreeComponent,
        BaseTemplateComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [TemplateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
