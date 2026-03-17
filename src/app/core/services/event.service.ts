import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface EventItem {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'academic' | 'social' | 'workshop' | 'competition';
  organizer?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: EventItem[] = [
    {
      id: 1,
      title: 'مناقشات مشاريع التخرج - الدفعة الأولى',
      date: '2026-04-15',
      time: '09:00 ص - 02:00 م',
      location: 'قاعة المؤتمرات الرئيسية',
      description: 'مناقشة الدفعة الأولى من مشاريع التخرج لطلاب الفرقة الرابعة بقسم علوم الحاسب والتخصصات المختلفة.',
      image: 'assets/must_discussion_1.png',
      category: 'academic',
      organizer: 'قسم علوم الحاسب'
    },
    {
      id: 2,
      title: 'ورشة عمل: الذكاء الاصطناعي في الرعاية الصحية',
      date: '2026-05-10',
      time: '12:00 م - 03:00 م',
      location: 'معمل 4B',
      description: 'ورشة عمل تطبيقية حول استخدام تقنيات تعلم الآلة في تحليل البيانات الطبية وتطوير أنظمة التشخيص الذكية.',
      image: 'assets/must_discussion_2.png',
      category: 'workshop',
      organizer: 'نادي الابتكار التكنولوجي'
    },
    {
      id: 3,
      title: 'المعرض السنوي للابتكارات الطلابية',
      date: '2026-06-01',
      time: '10:00 ص - 04:00 م',
      location: 'ساحة الكلية',
      description: 'عرض لأبرز الابتكارات والمشاريع المتميزة التي طورها طلاب الكلية خلال العام الدراسي الحالي بمشاركة كبرى الشركات.',
      image: 'assets/must_discussion_3.png',
      category: 'social',
      organizer: 'رعاية الشباب بالكلية'
    },
    {
      id: 4,
      title: 'مسابقة البرمجة التنافسية (FCI-CP)',
      date: '2026-07-20',
      time: '08:00 ص - 06:00 م',
      location: 'معامل البرمجة المتقدمة',
      description: 'المسابقة السنوية للبرمجة التنافسية لترشيح فرق الكلية للمسابقات الإقليمية والدولية (ICPC).',
      image: 'assets/must_discussion_1.png',
      category: 'competition',
      organizer: 'لجنة الأنشطة العلمية'
    }
  ];

  getEvents(): Observable<EventItem[]> {
    return of(this.events);
  }

  getEventById(id: number): Observable<EventItem | undefined> {
    const event = this.events.find(e => e.id === id);
    return of(event);
  }

  addEvent(event: EventItem): Observable<EventItem> {
    const newEvent = { ...event, id: this.events.length + 1 };
    this.events.push(newEvent);
    return of(newEvent);
  }
}
