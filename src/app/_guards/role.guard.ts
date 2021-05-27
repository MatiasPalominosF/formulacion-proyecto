import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationService } from '../_services/notificacion.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(public router: Router, private notifyService: NotificationService,) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole1 = route.data.expectedRole1;
    const expectedRole2 = route.data.expectedRole2;
    const token = JSON.parse(localStorage.getItem('dataCurrentUser'));

    console.log("ROL EN GUARD:", JSON.parse(localStorage.getItem('dataCurrentUser')).rol);
    if (localStorage.getItem('currentUser') == undefined) {
      // Not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      localStorage.removeItem('currentUser');
      localStorage.removeItem('dataCurrentUser');
      return false;
    } else if (token.rol !== expectedRole1 && token.rol !== expectedRole2) {
      this.notifyService.showError("Error", "¡No posee el permiso necesario para ver este elemento!");
      return false;
    }
    return true;
  }

}
