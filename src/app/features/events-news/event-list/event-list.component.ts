import { Component, OnInit } from '@angular/core';
import { EventService, EventItem } from '../../../core/services/event.service';
import { AuthMockService } from '../../../core/services/auth-mock.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  events: EventItem[] = [];
  currentUser: User | null = null;

  constructor(private eventService: EventService, private authService: AuthMockService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });

    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'academic': 'أكاديمي',
      'social': 'اجتماعي',
      'workshop': 'ورشة عمل',
      'competition': 'مسابقات'
    };
    return labels[category] || category;
  }

  onAddEvent(): void {
    const title = prompt('أدخل عنوان الفعالية الجديدة:');
    const description = prompt('أدخل وصف الفعالية:');
    if (title && description) {
      this.eventService.addEvent({
        id: 0,
        title,
        description,
        date: new Date().toISOString().split('T')[0],
        time: '10:00 ص - 12:00 م',
        location: 'الكلية',
        image: 'assets/must_discussion_1.png',
        category: 'academic'
      }).subscribe(() => {
        this.eventService.getEvents().subscribe(events => this.events = events);
      });
    }
  }
}
