import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/core/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  arrow = faArrowRight;
  posts: any[] = [];
  
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
  }

  getAll() {
    this.api.get('blog/getall').subscribe((data: any) => {
      this.posts = data.data;
      this.Toast.fire({
        icon: 'success',
        title: `<small> <b> Blog posts refreshed </b></small>`,
      });
    }, (err: HttpErrorResponse) => {
      this.Toast.fire({
        icon: 'error',
        title: `<small> <b> ${err} </b></small>`,
      })
    });
  }

}
