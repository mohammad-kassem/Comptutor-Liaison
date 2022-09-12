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

  refactorByDate(data: IContact[] | IMessage[]) {
    const series = [{name: 'Jan', value: 0}, {name: 'Feb', value: 0}, {name: 'Mar', value: 0}, {name: 'Apr', value: 0}, {name: 'May', value: 0}, {name: 'Jun', value: 0}, {name: 'Jul', value: 0}, {name: 'Aug', value: 0}, {name: 'Sep', value: 0}, {name: 'Oct', value: 0}, {name: 'Nov', value: 0}, {name: 'Dec', value: 0}]
    for (let dataItem of data){
      const date = new Date(dataItem.createdAt);
      const month = date.toLocaleString('default', {month: 'short'});
      for (let seriesItem of series) month === seriesItem.name && seriesItem.value ++; 
    }
    return series;
  }

  refactorByCountry(data: IContact[]) {
    let series: {name: string, value: number}[] = [];
    let notFound: boolean = true;
    for (let dataItem of data){
      const country = dataItem.country;
      console.log(country);
      for (let seriesItem of series){
        if (country === seriesItem.name){ 
          seriesItem.value++;
          notFound = false;
          break;
        }
      }
      notFound && series.push({name: country, value: 1});
    }
    return series;
  }
}
