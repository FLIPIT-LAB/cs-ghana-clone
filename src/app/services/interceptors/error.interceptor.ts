import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RouterStateSnapshot, Router } from '@angular/router';
import { NotificationsService } from '../core/notifications.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    state!: RouterStateSnapshot;
    constructor(private router: Router, private notify: NotificationsService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.notify.error('Login Session Expired Please Login Again');
                localStorage.removeItem('fsp');
                // location.reload();
                const url = this.state.url || '/app'
                this.router.navigate(['/auth/login'], { queryParams: { returnUrl: url } });
            }

            const error = err.error.message || err.statusText;
            this.notify.error(error);
            return throwError(error);
        }));
    }
}
