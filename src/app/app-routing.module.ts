import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'ideas',
    loadChildren: () => import('./features/ideas/ideas.module').then(m => m.IdeasModule)
  },
  {
    path: 'graduation-form',
    loadChildren: () => import('./features/graduation/graduation.module').then(m => m.GraduationModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./features/events-news/events-news.module').then(m => m.EventsNewsModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./features/events-news/events-news.module').then(m => m.EventsNewsModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./features/templates/templates.module').then(m => m.TemplatesModule)
  },
  {
    path: 'doctor',
    loadChildren: () => import('./features/doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
