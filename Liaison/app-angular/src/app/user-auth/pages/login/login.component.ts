import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ICridentials } from '../../models/cridentials';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: string = 'login';
  user: ICridentials;

  constructor(private authService: AuthService, private errorService: ErrorHandelingService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => this.user = user)
  }

  login(cridential: ICridentials): void {
    this.authService.login(cridential).subscribe({
      next: (response) => this.authService.handleLogin(response),  
      error: (error) => this.errorService.handleErrors(error)
    })
  }
}
