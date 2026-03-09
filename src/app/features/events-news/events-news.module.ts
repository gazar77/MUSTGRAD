import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { EventsNewsRoutingModule } from './events-news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    NewsListComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EventsNewsRoutingModule
  ]
})
export class EventsNewsModule { }
