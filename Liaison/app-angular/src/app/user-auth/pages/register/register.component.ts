import { ICridentials } from './../../models/cridentials';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { handleErrors } from 'src/app/utils/error-handling';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  type: string = 'register';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleSuccess(): void {
    console.log("successfully")
  }


  register(cridential: ICridentials): void {
    this.authService.register(cridential).subscribe({
      complete: this.handleSuccess, 
      error: (error) => handleErrors(error)
    })
  }
}
