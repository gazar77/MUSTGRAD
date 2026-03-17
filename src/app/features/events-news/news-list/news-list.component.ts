import { Component, OnInit } from '@angular/core';
import { NewsService, NewsItem } from '../../../core/services/news.service';
import { AuthMockService } from '../../../core/services/auth-mock.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsItems: NewsItem[] = [];
  currentUser: User | null = null;

  constructor(private newsService: NewsService, private authService: AuthMockService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.newsItems = news;
    });

    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  getCategoryArabic(category: string): string {
    const map: { [key: string]: string } = {
      'Announcement': 'إعلان',
      'Event': 'فعالية',
      'Reminder': 'تذكير'
    };
    return map[category] || category;
  }

  onAddNews(): void {
    const title = prompt('أدخل عنوان الجدول/الخبر الجديد:');
    const content = prompt('أدخل تفاصيل الخبر:');
    if (title && content) {
      this.newsService.addNews({
        id: 0,
        title,
        content,
        date: new Date(),
        author: this.currentUser?.name || 'Admin',
        category: 'Announcement'
      }).subscribe(() => {
        // Refresh list
        this.newsService.getNews().subscribe(news => this.newsItems = news);
      });
    }
  }
}
