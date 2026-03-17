import { Component, OnInit } from '@angular/core';
import { TemplateService, DocTemplate } from '../../../core/services/template.service';
import { AuthMockService } from '../../../core/services/auth-mock.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {
  templates: DocTemplate[] = [];
  currentUser: User | null = null;

  constructor(private templateService: TemplateService, private authService: AuthMockService) { }

  ngOnInit(): void {
    this.templateService.getTemplates().subscribe(templates => {
      this.templates = templates;
    });

    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  onAddTemplate(): void {
    const title = prompt('أدخل عنوان النموذج الجديد:');
    const description = prompt('أدخل وصف النموذج:');
    if (title && description) {
      this.templateService.addTemplate({
        id: 0,
        title,
        description,
        version: new Date().toLocaleDateString('en-GB'),
        type: 'PDF',
        url: '#'
      }).subscribe(() => {
        this.templateService.getTemplates().subscribe(templates => this.templates = templates);
      });
    }
  }
}
