import { Component, OnInit } from '@angular/core';
import { NewsService, NewsItem } from '../../../core/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  newsItems: NewsItem[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.newsItems = news;
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
}
