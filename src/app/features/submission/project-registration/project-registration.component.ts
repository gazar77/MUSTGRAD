import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-registration',
  templateUrl: './project-registration.component.html',
  styleUrls: ['./project-registration.component.scss']
})
export class ProjectRegistrationComponent implements OnInit {
  pageTitle = '';
  instructions = '';
  deadline = '2026-05-15';
  selectedFile: File | null = null;
  notes = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const type = data['type'];
      if (type === 'reg1') {
        this.pageTitle = 'تسجيل مشروع 1';
        this.instructions = 'يرجى رفع المستندات المطلوبة للمرحلة الأولى من تسجيل المشروع، تشمل كشف الدرجات وموافقة المشرف.';
      } else {
        this.pageTitle = 'تسجيل مشروع 2';
        this.instructions = 'يرجى رفع تقارير الإنجاز للمرحلة الثانية والمتطلبات النهائية للتسجيل.';
        this.deadline = '2026-06-20';
      }
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      console.log('Submitting for:', this.pageTitle, this.selectedFile, this.notes);
      alert('تم رفع المستندات بنجاح للمرحلة: ' + this.pageTitle);
    }
  }
}
