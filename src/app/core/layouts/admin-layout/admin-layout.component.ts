import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  template: `
    <div class="admin-wrapper">
      <app-admin-sidebar></app-admin-sidebar>
      <div class="admin-main">
        <app-admin-navbar></app-admin-navbar>
        <main class="admin-content">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .admin-wrapper {
      display: flex;
      height: 100vh;
      overflow: hidden;
      background: #f4f7f6;
    }
    .admin-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }
    .admin-content {
      padding: 30px;
    }
  `]
})
export class AdminLayoutComponent {}
