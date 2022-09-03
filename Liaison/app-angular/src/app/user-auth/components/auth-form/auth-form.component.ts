import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  fname: string;
  lname: string;
  email: string;
  password: string;
  @Input() type: string;
  @Output() handleSubmit: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  authForm = new FormGroup({
    fname: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(2)])
    ),
    lname: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(2)])
    ),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
    ),
  });

  onSubmit(): void {
    const cridential = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      password: this.password,
    };

    this.handleSubmit.emit(cridential);

    this.authForm.reset();
  }
}
