import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './pages/add-contact/add-contact.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact/add', component: AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
