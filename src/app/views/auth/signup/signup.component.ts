import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/core/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
// variable - default false
show: boolean = false;
  arrow = faArrowDown;
  right = faArrowRight;
  submitted : Boolean = false; get: any; res: any; 
  @ViewChild('signupForm') public : any = NgForm;

  readonly Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: true,
    // timer: 5000,
    // timerProgressBar: true,
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
    this.get = { business_name: '', firstname: '', lastname: '', mobile: '', email: '', password: '', agree:'', date: new Date()};
  }

  signup() {
    this.submitted = true;
    console.log(this.get)
    this.api.post('auth/register', this.get).subscribe((data: any) => {
      this.Toast.fire({
        icon: 'success',
        title: `<small> <b> Account Created successfully, Please go to your mail to confirm your account </b></small>`,
      });
      // this.router.navigate(['/auth/login']);
    }, (err: HttpErrorResponse) => {
      this.submitted = false;
      this.Toast.fire({
        icon: 'error',
        title: `<small> <b> ${err} </b></small>`,
      })
    });
  }
  
 // click event function toggle
password() {
  this.show = !this.show;
}

}
