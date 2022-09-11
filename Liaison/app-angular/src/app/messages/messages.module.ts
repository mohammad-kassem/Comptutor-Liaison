import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComposeBoxComponent } from './components/compose-box/compose-box.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { DisplayMessageComponent } from './pages/display-message/display-message.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    ComposeBoxComponent,
    InboxComponent,
    DisplayMessageComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [ComposeBoxComponent]
})
export class MessagesModule { }
