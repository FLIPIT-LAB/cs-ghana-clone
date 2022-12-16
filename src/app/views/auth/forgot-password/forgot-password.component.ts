import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/core/api.service';
import { SigninService } from 'src/app/services/features/signin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  get: any; isLoginError?: boolean; res: any;  @ViewChild('resetForm') public : any = NgForm;
  readonly Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.get = { email: ''};
  }

  Reset() {
    this.api.post('auth/reset', this.get).subscribe((data: any) => {
      this.router.navigate(['/login']); location.reload();
    }, (err: any) => { this.isLoginError = true; 
      this.Toast.fire({
        icon: 'error',
        title: `<small> <b> ${err} </b></small>`,
      })
    });
  }

}


/* 
  submitted : Boolean = false; get: any; res: any; 
  @ViewChild('resetForm') public : any = NgForm;

  readonly Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.get = { email: '', date: new Date()};
  }

  Reset() {
    this.submitted = true;
    console.log(this.get)
    this.api.post('signup', this.get).subscribe((data: any) => {
      this.Toast.fire({
        icon: 'success',
        title: `<small> <b> Reset link sent to your email </b></small>`,
      });
    }, (err: HttpErrorResponse) => {
      this.submitted = false;
      // this.Toast.fire({
      //   icon: 'error',
      //   title: `<small> <b> ${err} </b></small>`,
      // })
      this.Toast.fire({
        icon: 'error',
        title: `<small> <b> ${err} </b></small>`,
      })
    });
  }


}
 */