import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../../core/services/news.service';
import { EventService } from '../../../core/services/event.service';
import { TemplateService } from '../../../core/services/template.service';
import { IdeaService } from '../../../core/services/idea.service';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})
export class AdminManagementComponent implements OnInit {
  type: string = '';
  title: string = '';
  items: any[] = [];
  columns: { key: string, label: string }[] = [];
  
  modalConfig = {
    isOpen: false,
    title: '',
    fields: [] as any[]
  };

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private eventService: EventService,
    private templateService: TemplateService,
    private ideaService: IdeaService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.type = data['type'];
      this.initView();
    });
  }

  initView() {
    switch (this.type) {
      case 'news':
        this.title = 'إدارة جداول المناقشات';
        this.columns = [
          { key: 'title', label: 'العنوان' },
          { key: 'date', label: 'التاريخ' },
          { key: 'author', label: 'الناشر' }
        ];
        this.newsService.getNews().subscribe(res => this.items = res);
        break;
      case 'event':
        this.title = 'إدارة الفعاليات';
        this.columns = [
          { key: 'title', label: 'الفعالية' },
          { key: 'date', label: 'التاريخ' },
          { key: 'location', label: 'المكان' }
        ];
        this.eventService.getEvents().subscribe(res => this.items = res);
        break;
      case 'template':
        this.title = 'إدارة النماذج والوثائق';
        this.columns = [
          { key: 'title', label: 'الاسم' },
          { key: 'type', label: 'النوع' },
          { key: 'version', label: 'الإصدار' }
        ];
        this.templateService.getTemplates().subscribe(res => this.items = res);
        break;
      case 'ideas':
        this.title = 'إدارة أفكار المشاريع';
        this.columns = [
          { key: 'title', label: 'عنوان المشروع' },
          { key: 'category', label: 'التصنيف' },
          { key: 'supervisorName', label: 'المشرف' },
          { key: 'status', label: 'الحالة' }
        ];
        this.ideaService.getIdeas().subscribe(res => this.items = res);
        break;
    }
  }

  onAdd() {
    this.modalConfig.isOpen = true;
    if (this.type === 'news') {
      this.modalConfig.title = 'إضافة جدول جديد';
      this.modalConfig.fields = [
        { name: 'title', label: 'العنوان', type: 'text' },
        { name: 'content', label: 'المحتوى', type: 'textarea' }
      ];
    } else if (this.type === 'event') {
      this.modalConfig.title = 'إضافة فعالية جديدة';
      this.modalConfig.fields = [
        { name: 'title', label: 'الاسم', type: 'text' },
        { name: 'description', label: 'الوصف', type: 'textarea' },
        { name: 'category', label: 'التصنيف', type: 'select', options: ['أكاديمي', 'ورشة عمل', 'إجتماعي'] }
      ];
    } else if (this.type === 'template') {
      this.modalConfig.title = 'إضافة نموذج جديد';
      this.modalConfig.fields = [
        { name: 'title', label: 'الاسم', type: 'text' },
        { name: 'description', label: 'الوصف', type: 'textarea' },
        { name: 'type', label: 'النوع', type: 'select', options: ['PDF', 'Word', 'Excel'] }
      ];
    } else if (this.type === 'ideas') {
      this.modalConfig.title = 'إضافة فكرة مشروع جديدة';
      this.modalConfig.fields = [
        { name: 'title', label: 'عنوان المشروع', type: 'text' },
        { name: 'category', label: 'التصنيف', type: 'text' },
        { name: 'description', label: 'الوصف', type: 'textarea' },
        { name: 'supervisorName', label: 'اسم المشرف', type: 'text' }
      ];
    }
  }

  handleSave(data: any) {
    if (this.type === 'news') {
      this.newsService.addNews({ id: Date.now(), title: data.title, content: data.content, date: new Date(), author: 'مدير النظام', category: 'Announcement' })
        .subscribe(() => this.initView());
    } else if (this.type === 'event') {
      this.eventService.addEvent({ id: Date.now(), title: data.title, description: data.description, category: 'academic', date: '2024-05-01', time: '10:00', location: 'الكلية', image: 'assets/must_discussion_1.png' })
        .subscribe(() => this.initView());
    } else if (this.type === 'template') {
      this.templateService.addTemplate({ id: Date.now(), title: data.title, description: data.description, type: data.type, version: '1.0', url: '#' })
        .subscribe(() => this.initView());
    } else if (this.type === 'ideas') {
      this.ideaService.addIdea({ 
        id: Date.now(), 
        title: data.title, 
        description: data.description, 
        category: data.category, 
        supervisorName: data.supervisorName,
        difficulty: 'Medium',
        requiredSkills: [],
        maxTeamSize: 4,
        createdAt: new Date(),
        status: 'Open'
      }).subscribe(() => this.initView());
    }
  }

  onDelete(item: any) {
    // In mock services, we don't have delete yet, but we'll simulate refresh
    alert('تم المسح بنجاح (محاكاة)');
    this.items = this.items.filter(i => i.id !== item.id);
  }
}
