import { Component, OnInit } from '@angular/core';
import { IdeaService } from '../../../core/services/idea.service';
import { Idea, ProjectCategory } from '../../../core/models/idea.model';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {
  allIdeas: Idea[] = [];
  filteredIdeas: Idea[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';
  selectedStatus: string = '';

  categories: ProjectCategory[] = [
    'تطوير مواقع ويب',
    'تطوير تطبيقات موبايل',
    'الذكاء الاصطناعي',
    'تعلم الآلة',
    'الرؤية الحاسوبية',
    'الأمن السيبراني',
    'الشبكات والحوسبة السحابية',
    'تحليل البيانات',
    'إنترنت الأشياء',
    'معالجة اللغة الطبيعية'
  ];

  constructor(private ideaService: IdeaService) { }

  ngOnInit(): void {
    this.ideaService.getIdeas().subscribe(ideas => {
      this.allIdeas = ideas;
      this.filteredIdeas = ideas;
    });
  }

  filterIdeas(): void {
    this.filteredIdeas = this.allIdeas.filter(idea => {
      const matchesSearch = idea.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        idea.description.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory ? idea.category === this.selectedCategory : true;
      const matchesStatus = this.selectedStatus ? idea.status === this.selectedStatus : true;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }
}
