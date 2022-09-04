import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generateApiUrl, generateHttpOptions } from '../utils/api-functions/api-functions';
import { IContact } from './models/contact';

const authToken: string = localStorage.getItem('auth_token') || ''; 
const httpOptions = generateHttpOptions(authToken);

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  getCintactsApiUrl: string = generateApiUrl('contacts');
  
  constructor(private http:HttpClient) { }

  getContacts(): Observable<{message: string, contacts: IContact[]}> {
    return this.http.get<{message: string, contacts: IContact[]}>(this.getCintactsApiUrl,  httpOptions);
  }
}
