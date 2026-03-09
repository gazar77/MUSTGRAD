import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { IdeaManagementComponent } from './idea-management/idea-management.component';

@NgModule({
  declarations: [
    DoctorDashboardComponent,
    IdeaManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
