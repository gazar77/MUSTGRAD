import { Component, Input, OnInit } from '@angular/core';
import { Idea } from '../../../core/models/idea.model';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss']
})
export class IdeaCardComponent implements OnInit {
  @Input() idea!: Idea;

  constructor() { }

  ngOnInit(): void {
  }

  getStatusArabic(status: string): string {
    const map: { [key: string]: string } = {
      'Open': 'متاح',
      'Reserved': 'محجوز فرئياً',
      'Approved': 'معتمد',
      'Closed': 'مغلق'
    };
    return map[status] || status;
  }

  getDifficultyArabic(difficulty: string): string {
    const map: { [key: string]: string } = {
      'Easy': 'سهل',
      'Medium': 'متوسط',
      'Hard': 'صعب'
    };
    return map[difficulty] || difficulty;
  }
}
