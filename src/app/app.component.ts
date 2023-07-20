import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: any = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const adminID = localStorage.getItem('adminID');
    const studentID = localStorage.getItem('studentID');
    if (adminID != null) {
      this.appPages = [
        {
          title: 'Applicants List',
          url: '/folder/Applicant Lists',
          icon: 'list',
        },
        {
          title: 'Applicant Records',
          url: '/folder/Applicants Record',
          icon: 'list',
        },
      ];
    } else if (studentID != null) {
      this.appPages = [
        { title: 'Profile', url: '/folder/Profile', icon: 'person-circle' },
        {
          title: 'Scholarship Status',
          url: '/folder/Scholarship Status',
          icon: 'cellular',
        },
        {
          title: 'Scholarship Requirements',
          url: '/folder/Scholarship Requirements',
          icon: 'newspaper',
        },
        {
          title: 'Submit Requirements',
          url: '/folder/Submit Requirements',
          icon: 'send',
        },
        {
          title: 'Notifications',
          url: '/folder/Notifications',
          icon: 'notifications',
        },
        { title: 'Messages', url: '/folder/Messages', icon: 'mail' },
      ];
    }
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.handleRouteChange();
      }
    });
  }

  handleRouteChange() {
    const adminID = localStorage.getItem('adminID');
    const studentID = localStorage.getItem('studentID');
    if (adminID != null) {
      this.appPages = [
        {
          title: 'Applicants List',
          url: '/folder/Applicant Lists',
          icon: 'list',
        },
        {
          title: 'Applicant Records',
          url: '/folder/Applicant Records',
          icon: 'list',
        },
      ];
    } else if (studentID != null) {
      this.appPages = [
        { title: 'Profile', url: '/folder/Profile', icon: 'person-circle' },
        {
          title: 'Scholarship Status',
          url: '/folder/Scholarship Status',
          icon: 'cellular',
        },
        {
          title: 'Scholarship Requirements',
          url: '/folder/Scholarship Requirements',
          icon: 'newspaper',
        },
        {
          title: 'Submit Requirements',
          url: '/folder/Submit Requirements',
          icon: 'send',
        },
        {
          title: 'Notifications',
          url: '/folder/Notifications',
          icon: 'notifications',
        },
        { title: 'Messages', url: '/folder/Messages', icon: 'mail' },
      ];
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
