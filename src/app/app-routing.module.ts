import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseTemplateComponent } from './pages/choose-template/choose-template.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { ResumeFormComponent } from './pages/resume-form/resume-form.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: GetStartedComponent
    },
    {
        path: 'resume-form',
        pathMatch: 'full',
        component: ResumeFormComponent
    },
    {
        path: 'choose-template',
        pathMatch: 'full',
        component: ChooseTemplateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
