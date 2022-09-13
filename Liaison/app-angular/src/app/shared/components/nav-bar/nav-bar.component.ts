import { Component, Input, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/user-auth/auth.service';
import { ICridentials } from 'src/app/user-auth/models/cridentials';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  faUserCircle = faUserCircle;
  sideBarIsVisible = false;
  user: ICridentials;
  @Input() type: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe((user) => this.user = user);
  }

  showSideBar(): void {
    this.sideBarIsVisible = !this.sideBarIsVisible;
  }
}
