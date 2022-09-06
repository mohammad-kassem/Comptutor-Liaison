import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes, faStar, faPen } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import { IContact } from '../../models/contact';

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
  @Input() contacts: IContact[];
  @Output() handleRemove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onRemove(removedContact: IContact): void {
    this.handleRemove.emit(removedContact);
  }
  
}
