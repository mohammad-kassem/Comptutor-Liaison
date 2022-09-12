import { MessagesRoutingModule } from './../messages/messages-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MessagesRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [
    NavBarComponent,
    SearchBarComponent,
  ]
})
export class SharedModule { }
