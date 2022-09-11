import { AuthService } from './../../../user-auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICridentials } from 'src/app/user-auth/models/cridentials';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';
import { MessagesService } from '../../messages.service';
import { IMessage } from '../../models/messages';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent implements OnInit {
  message: IMessage;
  messageId : string = this.route.snapshot.paramMap.get('id') || "";
  user: ICridentials;
  
  constructor(private messagesService: MessagesService, private errorService: ErrorHandelingService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.messagesService.getMessage(this.messageId).subscribe({
      next: (response) => this.message = response.message,
      error: (error) => this.errorService.handleErrors(error),
    })
    this.authService.user.subscribe((user) => this.user = user);
  }

  refactorText(text: string): string {
    const re = new RegExp('<br />', 'g');
    return text.replace(re, '\r');
  }
}
