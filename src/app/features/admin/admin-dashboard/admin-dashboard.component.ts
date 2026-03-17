import { Component, OnInit } from '@angular/core';
import { AuthMockService } from '../../../core/services/auth-mock.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  currentUser: User | null = null;
  today = new Date();

  constructor(private authService: AuthMockService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
}
