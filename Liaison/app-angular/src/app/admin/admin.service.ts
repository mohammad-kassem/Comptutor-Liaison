import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { generateApiUrl, generateHttpOptions } from '../utils/api-functions/api-functions';
import { IUser } from './models/users';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../contacts/models/contact';
import { IMessage } from '../messages/models/messages';

const authToken: string = localStorage.getItem('auth_token') || '';
const httpOptions = generateHttpOptions(authToken);

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<{count: number, users: IUser[]}>{
    const getUsersApiUrl: string = generateApiUrl('users', '');
    return this.http.get<{count: number, users: IUser[]}>(getUsersApiUrl, httpOptions)
  }

  filterUsers(serachText: string): Observable<{count: number, users: IUser[]}>{
    const filterUsersApiUrl: string = generateApiUrl('users', '', serachText, 'search');
    return this.http.get<{count: number, users: IUser[]}>(filterUsersApiUrl, httpOptions)
  }

  getContacts(userId: string): Observable<{count: number, contacts: IContact[]}>{
    const getContactsApiUrl: string = generateApiUrl('contacts', 'admin', userId);
    return this.http.get<{count: number, contacts: IContact[]}>(getContactsApiUrl, httpOptions);
  }

  getMessages(userId: string): Observable<{count: number, messages: IMessage[]}>{
    const getMessagesApiUrl: string = generateApiUrl('messages', 'admin', userId);
    return this.http.get<{count: number, messages: IMessage[]}>(getMessagesApiUrl, httpOptions);
  }
}
