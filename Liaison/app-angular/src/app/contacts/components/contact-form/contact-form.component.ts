import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() relationship: string;
  @Input() location: IContact["location"];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  contactForm = new FormGroup({
    name: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email, Validators.minLength(6)])
    ),
    phone: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15), Validators.pattern(/^\d+$/)])
    ),
    relationship: new FormControl(
      '',
      Validators.compose([Validators.required])
    )
  })

  onCancel (): void {
    this.router.navigate(['/']);
  }

}
