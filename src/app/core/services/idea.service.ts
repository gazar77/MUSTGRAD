import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Idea } from '../models/idea.model';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
  // TODO: Connect to backend .NET API
  // private apiUrl = 'https://localhost:5001/api/ideas';

  private mockIdeas: Idea[] = [
    {
      id: 1,
      title: 'نظام إدارة مشاريع التخرج الذكي',
      description: 'نظام متكامل لإدارة عملية اختيار وتتبع مشاريع التخرج باستخدام تقنيات الويب الحديثة.',
      category: 'تطوير مواقع ويب',
      difficulty: 'Medium',
      requiredSkills: ['Angular', '.NET Core', 'SQL Server'],
      maxTeamSize: 4,
      supervisorDoctorId: 101,
      supervisorName: 'د. محمد علي',
      createdAt: new Date(),
      status: 'Open'
    },
    {
      id: 2,
      title: 'تطبيق مراقبة الصحة الشخصية',
      description: 'تطبيق موبايل يساعد المستخدمين على تتبع حالتهم الصحية والأنشطة الرياضية باستخدام أجهزة الاستشعار.',
      category: 'تطوير تطبيقات موبايل',
      difficulty: 'Hard',
      requiredSkills: ['Flutter', 'Firebase', 'IoT'],
      maxTeamSize: 5,
      supervisorDoctorId: 102,
      supervisorName: 'د. سارة عادل',
      createdAt: new Date(),
      status: 'Reserved'
    },
    {
      id: 3,
      title: 'نظام كشف الاحتيال المالي',
      description: 'استخدام تقنيات تعلم الآلة للكشف عن المعاملات المالية المشبوهة في الوقت الحقيقي.',
      category: 'تعلم الآلة',
      difficulty: 'Hard',
      requiredSkills: ['Python', 'TensorFlow', 'Data Analysis'],
      maxTeamSize: 3,
      supervisorDoctorId: 103,
      supervisorName: 'د. أحمد حسن',
      createdAt: new Date(),
      status: 'Approved'
    },
    {
      id: 4,
      title: 'بوابة الخدمات الطلابية',
      description: 'منصة موحدة لتقديم جميع الخدمات التي يحتاجها الطالب خلال مسيرته الجامعية.',
      category: 'تطوير مواقع ويب',
      difficulty: 'Easy',
      requiredSkills: ['HTML', 'CSS', 'JavaScript'],
      maxTeamSize: 4,
      supervisorDoctorId: 101,
      supervisorName: 'د. محمد علي',
      createdAt: new Date(),
      status: 'Open'
    }
  ];

  constructor(private http: HttpClient) { }

  getIdeas(): Observable<Idea[]> {
    // TODO: Change to this.http.get<Idea[]>(this.apiUrl)
    return of(this.mockIdeas);
  }

  getIdeaById(id: number): Observable<Idea | undefined> {
    // TODO: Change to this.http.get<Idea>(`${this.apiUrl}/${id}`)
    const idea = this.mockIdeas.find(i => i.id === id);
    return of(idea);
  }

  addIdea(idea: Idea): Observable<Idea> {
    // TODO: Change to this.http.post<Idea>(this.apiUrl, idea)
    this.mockIdeas.push(idea);
    return of(idea);
  }
}
