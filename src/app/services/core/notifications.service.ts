import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

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
  constructor(private api: ApiService) { }

  error(err:string) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: err || 'Internal Server Error',
      showConfirmButton: true,
      // timer: 3000
    })
  }

  success(data:any) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: data.title || '',
      text: data.message || 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  delete(rout:string, data?:any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this.api.delete(rout).subscribe((data: any)=> {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Data has been deleted.',
            'success'
          )
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your Data is safe :)',
          'error'
        )
      }
    })
  }
}
