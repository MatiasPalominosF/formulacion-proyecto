import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("currentUser en guard: ", localStorage.getItem('currentUser'));
    console.log("dataCurrentUser en guard: ", localStorage.getItem('dataCurrentUser'));
    //console.log("name en guard: ", JSON.parse(localStorage.getItem('dataCurrentUser')).name, JSON.parse(localStorage.getItem('dataCurrentUser')).lastName);
    //console.log("rol en guard: ", JSON.parse(localStorage.getItem('dataCurrentUser')).rol);
    if (localStorage.getItem('currentUser')) {
      // Logged in so return true
      if(JSON.parse(localStorage.getItem('dataCurrentUser')).rol === "admin")
      return true;
    }

    // Not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('dataCurrentUser');
    return false;
  }
}
