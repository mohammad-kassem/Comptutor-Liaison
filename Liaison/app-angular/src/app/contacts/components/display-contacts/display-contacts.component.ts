import { ContactsService } from './../../contacts.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IContact } from '../../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.scss']
})
export class DisplayContactsComponent implements OnInit {
  faTimes = faTimes;
  faPen = faPen;
  faPlus = faPlus;
  showFilter: boolean = false;
  @Input() filteredContacts: IContact[];
  @Input() DBContacts: IContact[];
  @Output() handleRemove: EventEmitter<any> = new EventEmitter();
  @Output() handleToggleLike: EventEmitter<any> = new EventEmitter();

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit(): void {
    this.contactsService.filteredContacts.subscribe((contacts) => this.filteredContacts = contacts);
  }
  
  onRemove(removedContact: IContact): void {
    this.handleRemove.emit(removedContact);
  }

  onEdit(id: string): void {
    this.router.navigate(['/contact', id]);
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
    this.contactsService.onFilter(this.DBContacts)
  }

  onAdd(): void {
    this.router.navigate(['/contact/add']);
  }
  
  onToggleLike(contact: IContact): void {
    this.handleToggleLike.emit(contact);
  }
}
