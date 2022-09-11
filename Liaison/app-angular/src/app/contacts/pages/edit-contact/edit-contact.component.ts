import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';
import { ContactsService } from '../../contacts.service';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  relationship: string;
  location: IContact['location'];
  contactId: string = this.route.snapshot.paramMap.get('id') || '';

  constructor(
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private errorService: ErrorHandelingService
  ) {}

  ngOnInit(): void {
    this.contactsService.getContact(this.contactId).subscribe({
      next: (response) => this.onGet(response.contact),
      error: (error) => this.errorService.handleErrors(error),
    });
  }

  onGet(contact: IContact): void {
    this.name = contact.name;
    this.email = contact.email;
    this.phone = contact.phone;
    this.relationship = contact.relationship;
    this.location = contact.location;
  }

  updateContact(contact: IContact): void {
    this.contactsService.updateContact(contact, this.contactId).subscribe({
      next: (response) => this.contactsService.handleUpdate(response),
      error: (error) => this.errorService.handleErrors(error),
    });
  }
}
