import { ContactsService } from './../../contacts.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  faTimes,
  faPen,
  faPlus,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { IContact } from '../../models/contact';
import { Router } from '@angular/router';
import { ComposeBoxComponent } from 'src/app/messages/components/compose-box/compose-box.component';
import { MessagesService } from 'src/app/messages/messages.service';

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.scss'],
})
export class DisplayContactsComponent implements OnInit {
  faTimes = faTimes;
  faPen = faPen;
  faPlus = faPlus;
  faEnvelope = faEnvelope;
  showFilter: boolean = false;
  @Input() filteredContacts: IContact[];
  @Input() DBContacts: IContact[];
  @Output() handleRemove: EventEmitter<any> = new EventEmitter();
  @Output() handleToggleLike: EventEmitter<any> = new EventEmitter();

  @ViewChild('composeContainer', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private contactsService: ContactsService,
    private router: Router,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.contactsService.filteredContacts.subscribe(
      (contacts) => (this.filteredContacts = contacts)
    )
  }

  onRemove(removedContact: IContact): void {
    this.handleRemove.emit(removedContact);
  }

  onEdit(id: string): void {
    this.router.navigate(['/contact', id]);
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
    this.contactsService.onFilter(this.DBContacts);
  }

  onAdd(): void {
    this.router.navigate(['/contact/add']);
  }

  onToggleLike(contact: IContact): void {
    this.handleToggleLike.emit(contact);
  }

  createComponent(contact: IContact) {
    const ref = this.container.createComponent(ComposeBoxComponent);
    ref.setInput('contact', contact);
  }
}
