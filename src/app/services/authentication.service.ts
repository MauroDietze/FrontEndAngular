import { InitSessionComponent } from './../components/init-session/init-session.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // loginUrl="http://localhost:9004/api/auth/login";
  // logoutUrl="http://localhost:9004/api/user/logout";
  loginUrl = "https://portfolio-service-nxbo.onrender.com/api/auth/login";
  logoutUrl = "https://portfolio-service-nxbo.onrender.com/api/auth/logout";
  // loginUrl="http://181.46.20.14:8080/api/auth/login";
  // logoutUrl="http://181.46.20.14:8080/api/user/logout";
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) { 
    console.log('El servicio de autenticación está corriendo');
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));

  }

  InitSession(credentials:any):Observable<any> {
    return this.http.post(this.loginUrl, credentials).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      console.log('currentUser: ', JSON.stringify(data))
      return data;
    }))
  }

  LogoutSession(credentials:any):Observable<any> {
    console.log("llega hasta authentication.service")
    return this.http.post(this.logoutUrl, credentials).pipe(map(data => {
      sessionStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      console.log('response: ', JSON.stringify(data))
      return data;
    }))
  }

  get AuthenticatedUser() {
    return this.currentUserSubject.value;
  }
}
