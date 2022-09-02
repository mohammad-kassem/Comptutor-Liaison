import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ICridentials } from '../../models/cridentials';

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

  handleErrors(err: any): void {
    alert(err.error.mesasage)
  }

  login(cridential: ICridentials): void {
    this.authService.login(cridential).subscribe({
      complete: ()=>console.log("successfully"), 
      error: (error) => alert(error.error.message)
    })
  }
}
