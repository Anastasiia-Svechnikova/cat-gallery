import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class CatsApiInterceptor implements HttpInterceptor {
  apiKey = environment.apiKey;

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      setParams: {
        api_key: this.apiKey,
      },
    });

    return next.handle(apiReq).pipe(
      tap(
        (err) => {
          if (err instanceof HttpErrorResponse) {
             console.log('Server response error');
          }
        }
      )
    );
  }
}
