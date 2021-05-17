import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class httpInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addAuthHeader(req);
    return next.handle(req)
  }

  /**
   * Add user token to Headers
  */
  addAuthHeader(req: HttpRequest<any>) {
    const token = localStorage.getItem('token')
    if (token) return req.clone({
      headers: req.headers.set('token', token)
    })
    return req;
  }
}
