import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileMenuOpen = false;
  isScrolled = false;
  activeDropdown: string | null = null;

  constructor(public router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.closeMobileMenu();
    });
  }

  get isSubmissionActive(): boolean {
    return false; // Will be active when route matches
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
