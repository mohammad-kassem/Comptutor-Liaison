import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';
import { MessagesService } from '../../messages.service';
import { IMessage } from '../../models/messages';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  messages: IMessage[];

  constructor(private messagesService: MessagesService, private errorService: ErrorHandelingService, private router: Router) { }

  ngOnInit(): void {
    this.messagesService.getMessages().subscribe({
      next: (response) => this.messages = response.messages,
      error: (error) => this.errorService.handleErrors(error),
    })
  }

  refactorText(text: string): string {
    const re = new RegExp('<br />', 'g');
    const output = text.replace(re, '\n');
    return output.length >= 80 ? output.slice(0, 80) + '...' : output;
  }

  onClick(id: string): void {
    this.router.navigate(['/message', id]);
  }

  searchMessages(searchText: string): void {
    this.messagesService.filterMessages(searchText).subscribe({
      next: (response) => this.messages = response.messages,
      error: (error) => this.errorService.handleErrors(error),
    })
  }
}
