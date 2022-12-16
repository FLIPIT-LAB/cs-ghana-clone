import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/core/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  arrow = faArrowRight;
  id: any; post: any;
  
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
  

  constructor(
    private api: ApiService, 
    private rout: Router, 
    private router: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.getAllCustomers(this.id);
  }

  getAllCustomers(id: any) {
    this.api.get("blog/Get/"+id).subscribe((data: any) => {
      this.post = data.data; 
    }, (err: HttpErrorResponse) => {
      this.Toast.fire({
        icon: 'error',
        title: `<small> <b> ${err} </b></small>`,
      })
    });
  }

}
