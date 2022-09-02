import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  fname: string;
  lname: string;
  email: string;
  password: string;
  @Input() type: string ;
  @Output() handleSubmit: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const cridential = {
      fname: this.fname,
      lname: this.lname,
      email: this.email,
      password: this.password,
    }

    this.handleSubmit.emit(cridential);

    this.fname = '';
    this.lname = '';
    this.email = '';
    this.password = '';
  }

}
