import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/user-auth/auth.service';
import { ErrorHandelingService } from 'src/app/utils/error-handling/error-handeling.service';
import { AdminService } from '../../admin.service';
import { IUser } from '../../models/users';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.scss'],
})
export class UserStatsComponent implements OnInit {
  user: IUser;
  faUserCircle = faUserCircle;
  userId: string = this.route.snapshot.paramMap.get('id') || '';
  constactsSeries: { name: string; value: number }[];
  messagessSeries: { name: string; value: number }[];
  contactsGraphData: {
    name: 'contacts';
    series: { name: string; value: number }[];
  };
  contactsBarData: { name: string; value: number }[];
  messagesGraphData: {
    name: 'messages';
    series: { name: string; value: number }[];
  };

  view: [number, number] = [600, 400];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Months';
  xAxisLabelBar: string = 'Countries';
  yAxisLabelContacts: string = 'Contacts';
  yAxisLabelMessages: string = 'Messages';
  timeline: boolean = true;
  gradient = false;

  colorScheme: Color = {
    name: 'graphScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#1877F2', '#8be6fd', '#a5edfd', '#1954a1', '#e3edff'],
  };

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private errorService: ErrorHandelingService
  ) {}

  ngOnInit(): void {
    this.adminService.getContacts(this.userId).subscribe({
      next: (response) => this.OnInit(response),
      error: (error) => this.errorService.handleErrors(error),
    });
    this.adminService.getMessages(this.userId).subscribe({
      next: (response) =>
        (this.messagesGraphData = {
          name: 'messages',
          series: this.adminService.refactorByDate(response.messages),
        }),
      error: (error) => this.errorService.handleErrors(error),
    });
    this.authService.user.subscribe((user) => (this.user = user));
  }

  OnInit(response: any): void {
    this.contactsGraphData = {
      name: 'contacts',
      series: this.adminService.refactorByDate(response.contacts),
    };
    this.contactsBarData = this.adminService.refactorByCountry(
      response.contacts
    );
  }
}
