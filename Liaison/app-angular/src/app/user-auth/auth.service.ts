import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generateApiUrl, generateHttpOptions }  from 'src/app/utils/api-functions';
import { ICridentials } from './models/cridentials';

const httpOptions = generateHttpOptions();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginApiUrl: string = generateApiUrl('user', 'login');
  registerApiUrl: string = generateApiUrl('user', 'register');


  constructor(private http:HttpClient) { }

  login(cridential: ICridentials): Observable<any> {
    return this.http.post(this.loginApiUrl, cridential, httpOptions);
  }

  register(cridential: ICridentials): Observable<any> {
    return this.http.post(this.registerApiUrl, cridential, httpOptions)
  }
  
}
