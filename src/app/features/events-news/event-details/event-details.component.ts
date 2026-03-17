import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService, EventItem } from '../../../core/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: EventItem | undefined;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEventById(id).subscribe({
      next: (data) => {
        this.event = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  getCategoryLabel(category: string): string {
    const labels: { [key: string]: string } = {
      'academic': 'أكاديمي',
      'social': 'اجتماعي',
      'workshop': 'ورشة عمل',
      'competition': 'مسابقة'
    };
    return labels[category] || category;
  }
}
