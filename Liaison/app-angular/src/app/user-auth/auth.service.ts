import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { generateApiUrl, generateHttpOptions }  from 'src/app/utils/api-functions/api-functions';
import { ICridentials } from './models/cridentials';
import { ToastrService } from 'ngx-toastr';



const httpOptions = generateHttpOptions();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginApiUrl: string = generateApiUrl('user', 'login');
  registerApiUrl: string = generateApiUrl('user', 'register');


  constructor(private http:HttpClient, private router:Router, private toastr: ToastrService) { }

  login(cridential: ICridentials): Observable<any> {
    return this.http.post(this.loginApiUrl, cridential, httpOptions);
  }

  register(cridential: ICridentials): Observable<any> {
    return this.http.post(this.registerApiUrl, cridential, httpOptions)
  }

  handleLogin(response: {auth_token: string, message: string, user: any}) {
    localStorage.setItem('auth_token', response.auth_token);
    this.router.navigate(['/'])
  }

  handleRegister(response: {id: string, message: string}) {
    this.router.navigate(['/login']);
    this.toastr.success(response.message, 'Registration Successful')
  }
  
}
