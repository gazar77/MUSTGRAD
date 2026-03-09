import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  { path: 'list', component: NewsListComponent },
  { path: 'calendar', component: EventListComponent },
  { path: '', component: NewsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsNewsRoutingModule { }
