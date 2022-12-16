import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/core/api.service';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './views/auth/auth.module';

export function tokenGetter() {
  return localStorage.getItem("fsp");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    /* JwtModule.forRoot({
      config: {
        tokenGetter,
      }
    }), */
    FormsModule,
    FontAwesomeModule,
    SharedModule,
    ServicesModule,
  ],
  providers: [
    // JwtHelperService, 
    ApiService, 
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
