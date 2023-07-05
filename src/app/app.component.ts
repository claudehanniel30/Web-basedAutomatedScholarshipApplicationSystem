import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profile', url: '/folder/Profile', icon: 'person-circle' },
    { title: 'Scholarship Status', url: '/folder/Scholarship Status', icon: 'cellular' },
    { title: 'Scholarship Requirements', url: '/folder/Scholarship Requirements', icon: 'newspaper' },
    { title: 'Submit Requirements', url: '/folder/Submit Requirements', icon: 'send' },
    { title: 'Notifications', url: '/folder/Notifications', icon: 'notifications' },
    { title: 'Messages', url: '/folder/Messages', icon: 'mail' },
  ];
}
