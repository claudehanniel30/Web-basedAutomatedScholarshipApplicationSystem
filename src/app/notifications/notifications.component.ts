import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  constructor(private database: DataserviceService) {}

  studentID: string = '';
  notifications: any[] = [];
  ngOnInit() {
    this.studentID = localStorage.getItem('studentID') || '';

    //loop though the students array
    for (let i = 0; i < this.database.students.length; i++) {
      if (this.database.students[i].studentID === this.studentID) {
        let studentID = this.database.students[i].studentID;
        let firstname = this.database.students[i].firstname;
        let lastname = this.database.students[i].lastname;
        let status = this.database.students[i].status;
        let message = '';
        let title = '';
        if (status === 'approved') {
          message = `Congratulations ${firstname} ${lastname}! Your application for the scholarship has been approved.`;
        } else if (status === 'rejected') {
          message = `Sorry ${firstname} ${lastname}, your application for the scholarship has been rejected. Thank you for applying.`;
        } else if (status === 'pending') {
          message = `Your application for the scholarship is still pending. Please wait for further notice.`;
        }
        let notification = {
          studentID: studentID,
          title: title,
          message: message,
        };

        this.notifications.push(notification);
      }
    }
  }
}
