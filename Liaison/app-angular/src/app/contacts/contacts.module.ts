import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DisplayContactsComponent } from './componenets/display-contacts/display-contacts.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DisplayContactsComponent,
    AddContactComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FontAwesomeModule
  ]
})
export class ContactsModule { }
