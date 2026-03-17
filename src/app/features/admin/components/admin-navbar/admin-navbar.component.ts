import { Component, OnInit } from '@angular/core';
import { AuthMockService } from '../../../../core/services/auth-mock.service';
import { User } from '../../../../core/models/user.model';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  currentUser: User | null = null;
  pageTitle: string = 'لوحة التحكم';

  constructor(private authService: AuthMockService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
}
