import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    FormsModule
  ]
})
export class UserAuthModule { }
