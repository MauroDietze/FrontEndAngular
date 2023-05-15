import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private AuthenticationService:AuthenticationService, private rutes:Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser = this.AuthenticationService.AuthenticatedUser;
      if(currentUser && currentUser.accessToken)
      {
        return true;
      }
      else {
        this.rutes.navigate(['/portfolio', '/projects']);
        return false;
      }
  }
  
}
