import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DisplayContactsComponent } from './components/display-contacts/display-contacts.component';
import { AddContactComponent } from './pages/add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { ContactsFilterComponent } from './components/contacts-filter/contacts-filter.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DisplayContactsComponent,
    AddContactComponent,
    ContactFormComponent,
    MapComponent,
    EditContactComponent,
    ContactsFilterComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactsModule { }
