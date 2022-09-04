import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../contacts.service';
import { faTimes, faStar, faPen } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import { IContact } from '../../models/contact';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.scss']
})
export class DisplayContactsComponent implements OnInit {
  contacts: IContact[];
  faTimes = faTimes;
  faStar = faStar;
  faStarRegular = faStarRegular;
  faPen = faPen;

  constructor(private contactsService: ContactsService, private errorService: ErrorHandelingService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: (contacts) => this.contacts = contacts.contacts,
      error: (error) => this.errorService.handleErrors(error)
    })
  }

  onRemove(removedContact: IContact): void {
    this.contactsService.removeContact(removedContact).subscribe({
      next: (response) => this.contacts = this.contactsService.handleRemove(response, this.contacts),
      error: (error) => this.errorService.handleErrors(error)
    })
  }
}
