import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/core/api.service';
import { SigninService } from 'src/app/services/features/signin.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  log: any; submitted: boolean = false; res: any; returnUrl: any;

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

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.resetLogin();
  }

  login() {
    this.submitted = true;
    console.log(this.log)
    this.api.post('auth',this.log).subscribe((data: any) => {
      if  (data && data.access_token) {
        this.Toast.fire({
          icon: 'success',
          title: `<small> <b> Login successful... Redirecting to dashboard </b></small>`,
        }),
        window.location.href = environment.dashboard +'login?token=' + data.access_token;
      }
    }, (err: HttpErrorResponse) => {
      this.submitted = false;
      this.Toast.fire({
        icon: 'error',
        title: `<small> <b> ${err} </b></small>`,
      })
    });
 }

  resetLogin(form?: NgForm) {
    if (form != null) { form.reset(); }
    this.log = { username: '', password: '' };
  }

}
