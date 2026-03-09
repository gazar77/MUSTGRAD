import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
