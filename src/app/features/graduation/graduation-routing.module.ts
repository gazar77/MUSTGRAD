import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraduationFormComponent } from './graduation-form/graduation-form.component';
import { ProposalSubmissionComponent } from './proposal-submission/proposal-submission.component';
import { GraduationRequirementsComponent } from './requirements/requirements.component';

const routes: Routes = [
  { path: '', component: GraduationFormComponent },
  { path: 'proposal', component: ProposalSubmissionComponent },
  { path: 'requirements-1', component: GraduationRequirementsComponent, data: { number: '1' } },
  { path: 'requirements-2', component: GraduationRequirementsComponent, data: { number: '2' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduationRoutingModule { }
