import { IMessage } from '../../models/messages';
import { IContact } from '../../../../../../server-nodejs/model/contact';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faTimes, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../messages.service';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';


@Component({
  selector: 'app-compose-box',
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.scss']
})
export class ComposeBoxComponent implements OnInit {
  recipient: string;
  subject: string;
  content: string;
  faTimes = faTimes;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  isMinimized: boolean = false;
  isCleared: boolean = false;
  @Input() contact: IContact;
  @Output() onInput: EventEmitter<any> = new EventEmitter();

  messageForm = new FormGroup({
    recipient: new FormControl(),
    subject: new FormControl(),
    content: new FormControl(),
  })
  constructor(private messagesService: MessagesService, private errorService: ErrorHandelingService) { }

  ngOnInit(): void {
    this.recipient = this.contact.email;
  }

  onMinimize() {
    this.isMinimized = !this.isMinimized;
  }

  onClear() {
    this.isCleared = true;
  }

  sendMessage(): void {
    const messageBody = {to: this.contact.email, subject: this.subject, content: this.content.replace(/\r?\n/g, '<br />'), contactId: <string>this.contact._id}
    this.messagesService.sendMessage(messageBody).subscribe({
      next: (response) => this.onSend(response),
      error: (error) => this.errorService.handleErrors(error)
    })
  }

  onSend(response: {message: string, new: IMessage}): void {
    this.messagesService.handleSend(response)
    this.isCleared = true;
  }
}
