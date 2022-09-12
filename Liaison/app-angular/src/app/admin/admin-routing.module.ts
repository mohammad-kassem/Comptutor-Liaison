import { DisplayUsersComponent } from './pages/display-users/display-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserStatsComponent } from './pages/user-stats/user-stats.component';

const routes: Routes = [
  {path: 'admin', component: DisplayUsersComponent},
  {path: 'admin/user/:id', component: UserStatsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
