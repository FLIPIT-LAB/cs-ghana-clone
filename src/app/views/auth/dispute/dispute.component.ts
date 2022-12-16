import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/core/api.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dispute',
  templateUrl: './dispute.component.html',
  styleUrls: ['./dispute.component.scss']
})
export class DisputeComponent implements OnInit {

  submitted : Boolean = false; get: any; res: any; 
  @ViewChild('disputeForm') public : any = NgForm;
  currency = environment.currency

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
  });
  
  constructor(private apis: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.init()
  }

  init() {
    this.get = { name: '', amount:'', debit_date:'', method: null, first_digits:'', last_digits:'', currency: environment.currency, date: new Date()};
  }

  Send() {
    this.submitted = true;
    console.log(this.get)
    this.apis.posts('dispute', this.get).subscribe((data: any) => {
      this.Toast.fire({
        icon: 'success',
        title: `<small> <b> Dispute sent and will be ressolved soon </b></small>`,
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
