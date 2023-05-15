import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private AuthenticationService:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = this.AuthenticationService.AuthenticatedUser;
    const isLoggedIn = currentUser?.accessToken;
    console.log("Interceptor está corriendo: " + JSON.stringify(currentUser));
    if (isLoggedIn && currentUser?.accessToken) {
      req=req.clone({
        setHeaders: { Authorization: `Bearer ${currentUser.accessToken}`}
      })
    }
    return next.handle(req);
  }

}

