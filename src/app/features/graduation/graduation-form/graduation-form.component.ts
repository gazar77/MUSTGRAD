import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graduation-form',
  templateUrl: './graduation-form.component.html',
  styleUrls: ['./graduation-form.component.scss']
})
export class GraduationFormComponent implements OnInit {
  today: Date = new Date();

  // Mock data for the form
  projectInfo = {
    title: 'نظام إدارة مشاريع التخرج الذكي',
    department: 'CS',
    supervisorName: 'د. محمد علي',
    students: [
      { id: '2022001', name: 'أحمد علي حسن', department: 'CS' },
      { id: '2022045', name: 'سارة محمود محمد', department: 'CS' },
      { id: '2022012', name: 'ياسين ابراهيم أحمد', department: 'CS' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
