import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { IdeaRegisterComponent } from './idea-register/idea-register.component';

const routes: Routes = [
  { path: '', component: IdeaListComponent },
  { path: 'register', component: IdeaRegisterComponent },
  { path: ':id', component: IdeaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeasRoutingModule { }
