import { Component, OnInit } from '@angular/core';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  phone: string = '';
  relationship: string = 'Single';
  location: IContact["location"] = {lat: 33.89539, long: 35.481902} //beirut default coordinates

  constructor() { }

  ngOnInit(): void {
  }

}
