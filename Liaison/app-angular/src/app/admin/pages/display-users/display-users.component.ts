import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';
import { AdminService } from '../../admin.service';
import { IUser } from '../../models/users';
import { AuthService } from 'src/app/user-auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements OnInit {
  user: IUser;
  users: IUser[];
  faUserCircle = faUserCircle

  constructor(private adminService: AdminService, private errorService: ErrorHandelingService, private authService: AuthService, private router: Router) {
    this.authService.user.subscribe((user) => this.user = user);
  }

  ngOnInit(): void {
    this.adminService.getUsers().subscribe({
      next: (response) => this.users = response.users,
      error: (error) => this.errorService.handleErrors(error),
    })
  }

  searchUsers(searchText: string): void {
    this.adminService.filterUsers(searchText).subscribe({
      next: (response) => this.users = response.users,
      error: (error) => this.errorService.handleErrors(error),
    })
  }

  onClick(id: string): void {
    this.router.navigate(['/admin/user', id]);
  }
}
