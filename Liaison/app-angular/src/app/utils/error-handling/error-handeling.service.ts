import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandelingService {

  constructor(private toastr: ToastrService) { }

  handleErrors = (err: any): void => {
    this.toastr.error(err.message, 'Error')
  }
}
