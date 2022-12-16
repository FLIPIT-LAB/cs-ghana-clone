import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/core/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-sales',
  templateUrl: './contact-sales.component.html',
  styleUrls: ['./contact-sales.component.scss']
})
export class ContactSalesComponent implements OnInit {

  arrow = faArrowDown;
  right = faArrowRight;
  
  submitted : Boolean = false; get: any; res: any; 
  @ViewChild('salesForm') public : any = NgForm;

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
  
  constructor(private apis: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    // this.get = { name:'', companyName:'', email:'', country: null, mobile:'', service: null, method: null, message: '',  date: new Date()};
    this.get = { name:'', company_name:'', email:'', country: null, mobile:'', service: null, method: null, message: '',  date: new Date()};
  }

  Send() {
    this.submitted = true;
    console.log(this.get)
    // this.api.post('contact-sales', this.get).subscribe((data: any) => {
      this.apis.posts('contact-sales', this.get).subscribe((data: any) => {
      this.Toast.fire({
        icon: 'success',
        title: `<small> <b> Message sent successfully, Sales team will contact you shortly </b></small>`,
      });
    }, (err: HttpErrorResponse) => {
      this.submitted = false;
      // this.Toast.fire({
      //   icon: 'error',
      //   title: `<small> <b> ${err} </b></small>`,
      // })
      this.Toast.fire({
        icon: 'error',
        title: `<small> <b> ${err}  </b></small>`,
      })
    });
  }


}
