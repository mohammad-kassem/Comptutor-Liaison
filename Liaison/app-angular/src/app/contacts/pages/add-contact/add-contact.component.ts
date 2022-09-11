import { Component, OnInit } from '@angular/core';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';
import { ContactsService } from '../../contacts.service';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  phone: string = '';
  relationship: string = 'Single';
  location: IContact['location'] = { lat: 33.89539, long: 35.481902 }; //beirut default coordinates

  constructor(
    private contactsService: ContactsService,
    private errorService: ErrorHandelingService
  ) {}

  ngOnInit(): void {}

  addContact(contact: IContact): void {
    this.contactsService.addContact(contact).subscribe({
      next: (response) => this.contactsService.handleAdd(response),
      error: (error) => this.errorService.handleErrors(error),
    });
  }
}
