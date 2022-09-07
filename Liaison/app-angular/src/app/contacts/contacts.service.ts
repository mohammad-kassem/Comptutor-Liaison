import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { generateApiUrl, generateHttpOptions } from '../utils/api-functions/api-functions';
import { IContact } from './models/contact';
import { Router } from '@angular/router';

const authToken: string = localStorage.getItem('auth_token') || ''; 
const httpOptions = generateHttpOptions(authToken);

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  filteredContactsSubject = new Subject<any>();
  filteredContacts = this.filteredContactsSubject.asObservable();


  constructor(private http:HttpClient, private toastr: ToastrService, private router: Router) { }

  getContacts(): Observable<{message: string, contacts: IContact[]}> {
    const getContactsApiUrl: string = generateApiUrl('contacts');
    return this.http.get<{message: string, contacts: IContact[]}>(getContactsApiUrl,  httpOptions);
  }

  getContact(id: string): Observable<{contact: IContact}> {
    const getContactApiUrl: string = generateApiUrl('contacts', '', id);
    return this.http.get<{contact: IContact}>(getContactApiUrl,  httpOptions);
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
    const addContactApiUrl: string = generateApiUrl('contacts', 'add');
    return this.http.post<{message: string, new: IContact}>(addContactApiUrl, contact, httpOptions);
  }

  handleAdd(response: {message: string, new: IContact}){
    this.toastr.success(response.message, 'Contact Added');
    this.router.navigate(['/']);
  }

  updateContact(updatedDetails: IContact, contactId: string): Observable<{message: string, updated: IContact}> {
    const updateContactApiUrl: string = generateApiUrl('contacts', 'update', contactId);
    return this.http.put<{message: string, updated: IContact}>(updateContactApiUrl, updatedDetails, httpOptions);
  }

  handleUpdate(response: {message: string, updated: IContact})  {
    this.toastr.success(response.message, 'Contact Deleted')
    this.router.navigate(['/']);
  }

  onFilter(contacts: IContact[]): void {
    this.filteredContactsSubject.next(contacts);
  }

  toggleLikeContact(contact: IContact): Observable<{message: string, liked?: IContact, unliked?: IContact}> {
    const likeContactApiUrl: string = generateApiUrl('contacts', contact.liker ? 'unlike' : 'like', contact._id);
    return this.http.put<{message: string, liked?: IContact, unliked?: IContact}>(likeContactApiUrl,'', httpOptions);
  }

  handleToggleLike(response: {message: string, liked?: IContact, unliked?: IContact}, DBContacts: IContact[], filteredContacts: IContact[]): [IContact[], IContact[]] {
    DBContacts = DBContacts.map((contact: IContact) => {
      if (response.liked) return contact._id === response.liked?._id ? response.liked : contact
      else return contact._id === response.unliked?._id ? response.unliked : contact
    })
    filteredContacts = filteredContacts.map((contact: IContact) => {
      if (response.liked) return contact._id === response.liked?._id ? response.liked : contact
      else return contact._id === response.unliked?._id ? response.unliked : contact
    })
    return [DBContacts, filteredContacts]
  }
}
