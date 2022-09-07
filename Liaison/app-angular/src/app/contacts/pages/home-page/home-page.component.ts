import { Component, OnInit } from '@angular/core';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';
import { ContactsService } from '../../contacts.service';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  filteredContacts: IContact[]
  DBContacts: IContact[];

  constructor(private contactsService: ContactsService, private errorService: ErrorHandelingService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: (response) => this.filteredContacts = this.DBContacts = response.contacts,
      error: (error) => this.errorService.handleErrors(error)
    })
    this.contactsService.filteredContacts.subscribe((contacts) => this.filteredContacts = contacts);
  }

  removeContact(contact: IContact): void {
    this.contactsService.removeContact(contact).subscribe({
      next: (response) => [this.DBContacts, this.filteredContacts] =  this.contactsService.handleRemove(response, this.DBContacts, this.filteredContacts),
      error: (error) => this.errorService.handleErrors(error)
    }) 
  }
}
