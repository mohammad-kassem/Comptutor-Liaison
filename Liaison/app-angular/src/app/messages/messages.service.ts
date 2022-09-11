import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { generateApiUrl, generateHttpOptions } from '../utils/api-functions/api-functions';
import { IMessage, IMessageBody } from './models/messages';

const authToken: string = localStorage.getItem('auth_token') || ''; 
const httpOptions = generateHttpOptions(authToken);

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  
  sendMessage(messageBody: IMessageBody): Observable<{message: string, new: IMessage}> {
    const sendMessageApiUrl: string = generateApiUrl('messages', 'send');
    return this.http.post<{message: string, new: IMessage}>(sendMessageApiUrl, messageBody, httpOptions);
  }

  handleSend(response: {message: string, new: IMessage}): void {
    this.toastr.success(response.message, 'Message Sent')
  }

  getMessages(): Observable<{messages: IMessage[]}> {
    const getMessagesApiUrl = generateApiUrl('messages', 'user');
    return this.http.get<{messages: IMessage[]}>(getMessagesApiUrl, httpOptions);
  }

  filterMessages(searchString: string): Observable<{messages: IMessage[]}> {
    const filterMessagesApiUrl = generateApiUrl('messages', 'user', searchString, 'search');
    return this.http.get<{messages: IMessage[]}>(filterMessagesApiUrl, httpOptions);
  }
}
