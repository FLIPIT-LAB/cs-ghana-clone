import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = environment.apiUrl;
  apis = environment.api;
  private isLoading = new Subject<boolean>();
  public Loading = this.isLoading.asObservable();
  public user: any;
  public wallet: any;
  userid: any;
  public readonly Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(
    private http: HttpClient, 
    // public jwtHelper: JwtHelperService
    ) { }
    
    @Output() event = new EventEmitter();

  show() {
    this.isLoading.next(true);
    // this.Loading = true;
  }

  hide() {
    this.isLoading.next(false);
    // this.Loading = false;
  }

  // activeuser() {
  //   return this.jwtHelper.decodeToken(this.jwtHelper.tokenGetter());
  // }

  Upload(data: File, type: string): Observable<any> {
    const fd = new FormData();
    fd.append('file', data);
    return this.http.post(this.api + 'gallery/' + type, fd);
  }

  getjson(route: string) {
    return this.http.get(this.api + route);
  }

  get(route: string) {
    return this.http.get(this.api + route);
  }

  posts(rout: string, data: any): Observable<any> {
    return this.http.post(this.apis + rout, JSON.stringify(data));
  }
  
  post(rout: string, data: any): Observable<any> {
    return this.http.post(this.api + rout, JSON.stringify(data));
  }

  put(rout:string, data:any): Observable<any> {
    return this.http.put(this.api + rout, JSON.stringify(data));
  }

  delete(rout:string): Observable<any> {
    return this.http.delete(this.api + rout);
  }

  success(message: string) {
    this.Toast.fire({
      icon: 'success',
      title: `<small><b>${message}</b> </small>`,
    });
  }
  
  error(err?:string) {
    this.Toast.fire({
      icon: 'error',
      // title: 'unable to fetch list',
      title: `<small> <b> ${err}  </b></small>`,
    })
  }

}
