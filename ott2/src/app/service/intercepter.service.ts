
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    req = req.clone({ headers: req.headers.set('Authorization', 'bearer ' + sessionStorage.getItem('NRBA_SESSION_ID')) });
    req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
    req = req.clone({ headers: req.headers.set('Access-Control-Allow-Methods', '*') });
    req = req.clone({ headers: req.headers.set('Access-Control-Allow-Headers', '*') });
    return next.handle(req);
  }
}
