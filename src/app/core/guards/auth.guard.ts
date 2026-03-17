import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthMockService } from '../services/auth-mock.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthMockService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      // Check if route is restricted by role
      if (route.data['roles']) {
        const userRole = currentUser.role.toLowerCase();
        const allowedRoles = route.data['roles'].map((r: string) => r.toLowerCase());
        
        if (allowedRoles.indexOf(userRole) === -1) {
          // Role not authorized so redirect to home page
          const redirectPath = currentUser.role === 'Admin' ? '/admin' : '/dashboard';
          this.router.navigate([redirectPath]);
          return false;
        }
      }
      // Authorized so return true
      return true;
    }

    // Not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
