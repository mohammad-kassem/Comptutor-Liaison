import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ComposeBoxComponent } from './compose-box/compose-box.component';


@NgModule({
  declarations: [
    ComposeBoxComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ],
  exports: [ComposeBoxComponent]
})
export class MessagesModule { }
