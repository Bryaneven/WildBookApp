import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url !== environment.apiUrl + 'signup' && request.url !== environment.apiUrl + 'login'){
      const headers = new HttpHeaders({
        authorization: 'Bearer ' + localStorage.getItem('token'),
      });
      const modified = request.clone({
        headers
      });
      return next.handle(modified);
    }
    return next.handle(request);
  }
}
