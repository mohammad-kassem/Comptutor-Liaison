import { ErrorHandelingService } from './../../../utils/error-handling/error-handeling.service';
import { ICridentials } from './../../models/cridentials';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  type: string = 'register';

  constructor(private authService: AuthService, private errorService: ErrorHandelingService) { }

  ngOnInit(): void {
  }

  register(cridential: ICridentials): void {
    this.authService.register(cridential).subscribe({
      next: (response) => this.authService.handleRegister(response), 
      error: (error) => this.errorService.handleErrors(error)
    })
  }
}
