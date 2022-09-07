import { ContactsService } from './../../contacts.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IContact } from '../../models/contact';
import { FilterKey, IFilters } from '../../models/filters';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.scss']
})
export class ContactsFilterComponent implements OnInit {
  filteredContacts: IContact[];
  filters: IFilters = {name: ['', '', ''], email: ['', '', ''], phone: ['', '', ''], relationship: ['', '', ''], country: ['', '', '']}
  classes =["name", "email", "phone", "relationship", "country"];
  @Input() DBContacts: IContact[];

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.filteredContacts.subscribe((contacts) => this.filteredContacts = contacts);
  }

  unsorted() { return 0 }

  onChange(e: any, i: Number, j: number){
    Object.values(this.filters).map((filter, index)=>{
        if (i === index){
          filter[j] = e;
        }
        return filter;
      })
    this.filteredContacts = (this.DBContacts.filter((contact: IContact)=> {
    let key: FilterKey
    for (key in this.filters) {
      if (!contact[key].toUpperCase().startsWith(this.filters[key][0].toUpperCase()) || !contact[key].toUpperCase().includes(this.filters[key][1].toUpperCase()) || !contact[key].toUpperCase().endsWith(this.filters[key][2].toUpperCase()))
        return false;
      }
      return true;
    }));
    this.contactsService.onFilter(this.filteredContacts)
  }
}
