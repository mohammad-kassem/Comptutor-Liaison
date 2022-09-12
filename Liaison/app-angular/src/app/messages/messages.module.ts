import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComposeBoxComponent } from './components/compose-box/compose-box.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { DisplayMessageComponent } from './pages/display-message/display-message.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ComposeBoxComponent,
    InboxComponent,
    DisplayMessageComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
  ],
  exports: [ComposeBoxComponent]
})
export class MessagesModule { }
