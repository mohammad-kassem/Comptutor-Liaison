import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';
import { ContactsService } from '../../contacts.service';
import { IContact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() name: string;
  @Input() email: string;
  @Input() phone: string;
  @Input() relationship: string;
  @Input() location: IContact['location'];
  @Output() handleSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private contactsService: ContactsService,
    private errorService: ErrorHandelingService
  ) {}

  ngOnInit(): void {}

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

  onSubmit(): void {
    this.contactsService.getCountry(this.location).subscribe({
      next: (response) =>
        this.handleSubmit.emit({
          name: this.name,
          email: this.email,
          phone: this.phone,
          relationship: this.relationship,
          location: this.location,
          country: response.address.country,
        }),
      error: () =>
        this.errorService.handleErrors({ message: 'Unexpected error' }),
    });
  }
}
