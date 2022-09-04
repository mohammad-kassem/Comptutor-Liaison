import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../contacts.service';
import { faTimes, faStar, faPen } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.scss']
})
export class DisplayContactsComponent implements OnInit {
  contacts: any[];
  faTimes = faTimes;
  faStar = faStar;
  faStarRegular = faStarRegular;
  faPen = faPen;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(
      {next: (contacts) => this.contacts = contacts.contacts}
    );
  }
}
