import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ICridentials } from '../../models/cridentials';
import { handleErrors } from 'src/app/utils/error-handling';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: string = 'login';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleSuccess(): void {
    console.log("successfully")
  }

  login(cridential: ICridentials): void {
    this.authService.login(cridential).subscribe({
      complete: this.handleSuccess, 
      error: (error) => handleErrors(error)
    })
  }
}
