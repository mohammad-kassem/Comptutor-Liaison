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
  
  constructor(private http:HttpClient, private toastr: ToastrService) { }

  getContacts(): Observable<{message: string, contacts: IContact[]}> {
    const getContactsApiUrl: string = generateApiUrl('contacts');
    return this.http.get<{message: string, contacts: IContact[]}>(getContactsApiUrl,  httpOptions);
  }

  removeContact(contact: IContact): Observable<{message: string, deleted: IContact}> {
    const removeContactApiUrl: string = generateApiUrl('contacts', 'remove', contact._id);
    return this.http.delete<{message: string, deleted: IContact}>(removeContactApiUrl, httpOptions);
  }
  }
}
