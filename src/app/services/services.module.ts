import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerService } from 'ngx-spinner';
import { GlobalsService } from './core/globals.service';
import { StorageServices } from './core/storage-services.service';
import { StorageService } from 'ngx-webstorage-service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthGuardsService } from './guards/app.guard';

export function tokenGetter() {
  return localStorage.getItem('fsp') || "";
}

export const providers: Array<any> = [
  NgxSpinnerService,
  GlobalsService, StorageServices,AuthGuardsService,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  // { provide: RouteReuseStrategy }
]

@NgModule({
	imports: [
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    CommonModule, 
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //   }
    // }),
	],
  providers: providers
})
export class ServicesModule {
}
