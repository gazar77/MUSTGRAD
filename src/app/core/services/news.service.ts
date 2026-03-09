import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: Date;
  author: string;
  category: 'Announcement' | 'Event' | 'Reminder';
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private mockNews: NewsItem[] = [
    {
      id: 1,
      title: 'إعلان توزيع مشاريع التخرج',
      content: 'نحيطكم علماً بأنه قد تم توزيع لجان الإشراف على مشاريع التخرج...',
      date: new Date('2026-03-05'),
      author: 'إدارة الكلية',
      category: 'Announcement'
    },
    {
      id: 2,
      title: 'ورشة عمل حول كتابة المقترح (Proposal)',
      content: 'ستقام ورشة عمل يوم الأثنين القادم بقاعة المؤتمرات بالكلية...',
      date: new Date('2026-03-08'),
      author: 'وحدة ضمان الجودة',
      category: 'Event'
    }
  ];

  constructor() { }

  getNews(): Observable<NewsItem[]> {
    return of(this.mockNews);
  }
}
