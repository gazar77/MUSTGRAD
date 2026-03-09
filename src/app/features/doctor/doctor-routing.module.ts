import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { IdeaManagementComponent } from './idea-management/idea-management.component';

const routes: Routes = [
  { path: '', component: DoctorDashboardComponent },
  { path: 'ideas/new', component: IdeaManagementComponent },
  { path: 'ideas/edit/:id', component: IdeaManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
