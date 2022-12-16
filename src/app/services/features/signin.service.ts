import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  // helper = new JwtHelperService();
  private api = environment.apiUrl;
  constructor(
    private http: HttpClient, 
    // public jwtHelper: JwtHelperService
    ) { }

  /* userDetails() {
    return this.helper.decodeToken(this.jwtHelper.tokenGetter());
  } */

  loginUser(data?:any): Observable<any> {
    return this.http.post(this.api + 'auth', JSON.stringify(data));
  }

  changePassword(data?:any): Observable<any> {
    return this.http.post(this.api + 'change-pin', JSON.stringify(data));
  }

  getClaim(): Observable<any> {
    return this.http.get(this.api + 'auth');
  }

  Reset(email?:any): Observable<any> {
    return this.http.get(this.api + 'auth/reset/' + email);
  }

  Disabled(id?:any): Observable<any> {
    return this.http.get(this.api + 'auth/disable/' + id);
  }

  resetUser(data?:any): Observable<any> {
    return this.http.post(this.api + 'auth/reset/', JSON.stringify(data));
  }

  logOut(user: string) {
    return this.http.get(this.api + 'logout');
  }
}
