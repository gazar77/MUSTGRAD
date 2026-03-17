import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DocTemplate {
  id: number;
  title: string;
  description: string;
  version: string;
  type: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private templates: DocTemplate[] = [
    {
      id: 1,
      title: 'قالب المقترح (Proposal Template)',
      description: 'النموذج الرسمي لكتابة مقترح مشروع التخرج.',
      version: '2026/02/15',
      type: 'DOCX',
      url: '#'
    },
    {
      id: 2,
      title: 'قالب العرض التقديمي (PPT Template)',
      description: 'التصميم المعتمد للعروض التقديمية للمناقشات.',
      version: '2026/01/10',
      type: 'PPTX',
      url: '#'
    },
    {
      id: 3,
      title: 'دليل التوثيق (IEEE Citation Guide)',
      description: 'دليل شامل لكيفية كتابة المراجع بطريقة IEEE.',
      version: '2025/12/01',
      type: 'PDF',
      url: '#'
    }
  ];

  getTemplates(): Observable<DocTemplate[]> {
    return of(this.templates);
  }

  addTemplate(template: DocTemplate): Observable<DocTemplate> {
    const newTemplate = { ...template, id: this.templates.length + 1 };
    this.templates.push(newTemplate);
    return of(newTemplate);
  }
}
