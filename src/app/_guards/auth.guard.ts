import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // Logged in so return true
      if (JSON.parse(localStorage.getItem('dataCurrentUser')).rol === "admin")
        return true;
    }

    // Not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('dataCurrentUser');
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      // Logged in so return true
      if (JSON.parse(localStorage.getItem('dataCurrentUser')).rol === "admin")
        return true;
    }

    // Not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('dataCurrentUser');
    return false;
  }


}
