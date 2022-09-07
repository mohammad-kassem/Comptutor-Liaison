import { ContactsService } from './../../contacts.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faStar, faPen } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import { IContact } from '../../models/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.scss']
})
export class DisplayContactsComponent implements OnInit {
  faTimes = faTimes;
  faStar = faStar;
  faStarRegular = faStarRegular;
  faPen = faPen;
  @Input() filteredContacts: IContact[];
  @Input() DBContacts: IContact[];
  @Output() handleRemove: EventEmitter<any> = new EventEmitter();

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
  
}
