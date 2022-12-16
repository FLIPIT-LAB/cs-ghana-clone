import { Injectable } from '@angular/core';
import { Router, Routes, RouterStateSnapshot } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpUserEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { NotificationsService } from '../core/notifications.service';
import { ApiService } from '../core/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    state!: RouterStateSnapshot; url: any; cur: any;
    // tslint:disable-next-line:max-line-length
    constructor(private notify: NotificationsService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.cur = req.url;
        this.url = this.cur.split('/').slice(-2)[0]; // console.log(this.url);
        if (this.url === 'gallery') {
            req = req.clone({
                setHeaders: {
                    'Access-Control-Allow-Origin': '*',
                    // Authorization: `Bearer ` + this.jwtHelper.tokenGetter()
                }
            });
        } else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    // Authorization: `Bearer ` + this.jwtHelper.tokenGetter()
                }
            });
        }
        // this.error.request(req);
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
                if (event.body && event.ok) {
                    // Call alert function
                    if(event.body.message) { this.notify.success(event.body); }
                }
            }
        }, (err: any) => {
        }));
    
    }
}
