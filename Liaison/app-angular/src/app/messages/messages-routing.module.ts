import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayMessageComponent } from './pages/display-message/display-message.component';
import { InboxComponent } from './pages/inbox/inbox.component';

const routes: Routes = [
  {path: 'inbox', component: InboxComponent },
  {path: 'message/:id', component: DisplayMessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }