import { Component } from '@angular/core';

interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'academic' | 'social' | 'workshop' | 'competition';
}

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent {
  events: EventItem[] = [
    {
      id: 1,
      title: 'مناقشات مشاريع التخرج - الدفعة الأولى',
      date: '2026-04-15',
      time: '09:00 ص - 02:00 م',
      location: 'قاعة المؤتمرات الرئيسية',
      description: 'مناقشة الدفعة الأولى من مشاريع التخرج لطلاب الفرقة الرابعة بقسم علوم الحاسب.',
      image: '/assets/slider-1.png',
      category: 'academic'
    },
    {
      id: 2,
      title: 'ورشة عمل: الذكاء الاصطناعي في الرعاية الصحية',
      date: '2026-05-10',
      time: '12:00 م - 03:00 م',
      location: 'معمل 4B',
      description: 'ورشة عمل تطبيقية حول استخدام تقنيات تعلم الآلة في تحليل البيانات الطبية.',
      image: '/assets/slider-2.png',
      category: 'workshop'
    },
    {
      id: 3,
      title: 'المعرض السنوي للابتكارات الطلابية',
      date: '2026-06-01',
      time: '10:00 ص - 04:00 م',
      location: 'ساحة الكلية',
      description: 'عرض لأبرز الابتكارات والمشاريع المتميزة التي طورها طلاب الكلية خلال العام.',
      image: '/assets/slider-3.png',
      category: 'social'
    },
    {
      id: 4,
      title: 'مسابقة البرمجة التنافسية (FCI-CP)',
      date: '2026-07-20',
      time: '08:00 ص - 06:00 م',
      location: 'معامل البرمجة المتقدمة',
      description: 'المسابقة السنوية للبرمجة التنافسية لترشيح فرق الكلية للمسابقات الإقليمية.',
      image: '/assets/slider-1.png', // reusing image since we don't have many
      category: 'competition'
    }
  ];

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      'academic': 'أكاديمي',
      'social': 'اجتماعي',
      'workshop': 'ورشة عمل',
      'competition': 'مسابقات'
    };
    return labels[category] || category;
  }
}
