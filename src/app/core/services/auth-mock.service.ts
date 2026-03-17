import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { User, AuthResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthMockService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    const savedUser = localStorage.getItem('must_user');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<AuthResponse> {
    // TODO: Connect to backend .NET API
    // POST /api/auth/login

    // Simulate API call
    const isAdmin = email === 'admin@must.edu.eg';
    return of({
      user: {
        id: isAdmin ? 999 : 1,
        name: isAdmin ? 'مدير النظام' : 'أحمد الطالب',
        email: email,
        role: isAdmin ? 'Admin' : 'Student',
        department: 'CS'
      } as User,
      token: 'fake-jwt-token-' + Math.random()
    }).pipe(
      delay(1000),
      tap(res => {
        localStorage.setItem('must_user', JSON.stringify(res.user));
        localStorage.setItem('must_token', res.token);
        this.currentUserSubject.next(res.user);
      })
    );
  }

  logout() {
    localStorage.removeItem('must_user');
    localStorage.removeItem('must_token');
    this.currentUserSubject.next(null);
  }

  register(userData: any): Observable<User> {
    // TODO: Connect to backend .NET API
    // POST /api/auth/register
    return of({
      id: Math.floor(Math.random() * 1000),
      ...userData,
      role: 'Student'
    }).pipe(delay(1000));
  }
}
