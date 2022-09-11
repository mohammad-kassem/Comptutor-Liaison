import { MessagesRoutingModule } from './../messages/messages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MessagesRoutingModule,
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
