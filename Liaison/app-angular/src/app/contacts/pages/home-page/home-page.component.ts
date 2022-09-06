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
  contacts: IContact[]

  constructor(private contactsService: ContactsService, private errorService: ErrorHandelingService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: (contacts) => this.contacts = contacts.contacts,
      error: (error) => this.errorService.handleErrors(error)
    })
  }

  removeContact(contact: IContact): void {
    this.contactsService.removeContact(contact).subscribe({
      next: (response) => this.contacts = this.contactsService.handleRemove(response, this.contacts),
      error: (error) => this.errorService.handleErrors(error)
    }) 
  }
}
