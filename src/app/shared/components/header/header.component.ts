import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthMockService } from '../../../core/services/auth-mock.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isScrolled = false;
  activeDropdown: string | null = null;
  currentUser: User | null = null;

  constructor(public router: Router, private authService: AuthMockService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
    });
  }

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout() {
    this.authService.logout();
    this.closeMobileMenu();
    this.router.navigate(['/auth/login']);
  }

  get isSubmissionActive(): boolean {
    const outlets = ['/proposal', '/project-registration-1', '/project-registration-2'];
    return outlets.some(path => this.router.url.includes(path));
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.has-dropdown')) {
      this.activeDropdown = null;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.activeDropdown = null;
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.activeDropdown = null;
  }

  isDropdownOpen(name: string): boolean {
    return this.activeDropdown === name;
  }

  openDropdown(name: string) {
    if (window.innerWidth > 992) {
      this.activeDropdown = name;
    }
  }

  closeDropdown() {
    if (window.innerWidth > 992) {
      this.activeDropdown = null;
    }
  }

  toggleDropdown(name: string) {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }
}
