import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generateApiUrl, generateHttpOptions } from '../utils/api-functions/api-functions';
import { IContact } from './models/contact';
import { Router } from '@angular/router';

const authToken: string = localStorage.getItem('auth_token') || ''; 
const httpOptions = generateHttpOptions(authToken);

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  constructor(private http:HttpClient, private toastr: ToastrService, private router: Router) { }

  getContacts(): Observable<{message: string, contacts: IContact[]}> {
    const getContactsApiUrl: string = generateApiUrl('contacts');
    return this.http.get<{message: string, contacts: IContact[]}>(getContactsApiUrl,  httpOptions);
  }

  removeContact(contact: IContact): Observable<{message: string, deleted: IContact}> {
    const removeContactApiUrl: string = generateApiUrl('contacts', 'remove', contact._id);
    return this.http.delete<{message: string, deleted: IContact}>(removeContactApiUrl, httpOptions);
  }

  handleRemove(response: {message: string, deleted: IContact}, contacts: IContact[]): IContact[]  {
    this.toastr.success(response.message, 'Contact Deleted')
    return contacts.filter((contact: IContact) => contact._id !== response.deleted._id)
  }

  getCountry(location: IContact["location"]): Observable<any> {
    const geoCoderApiURl: string =`https://nominatim.openstreetmap.org/reverse?format=json&lat=${location.lat}&lon=${location.long}&accept-language=en`;
    return this.http.get<any>(geoCoderApiURl, httpOptions);
  }

  addContact(contact: IContact): Observable<{message: string, new: IContact}> {
    const removeContactApiUrl: string = generateApiUrl('contacts', 'add');
    return this.http.post<{message: string, new: IContact}>(removeContactApiUrl, contact, httpOptions);
  }

  handleAdd(response: {message: string, new: IContact}){
    this.toastr.success(response.message, 'Contact Added');
    this.router.navigate(['/']);
  }
}
