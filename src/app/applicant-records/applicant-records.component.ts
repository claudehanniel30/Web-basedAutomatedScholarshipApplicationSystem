import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-applicant-records',
  templateUrl: './applicant-records.component.html',
  styleUrls: ['./applicant-records.component.scss'],
})
export class ApplicantRecordsComponent implements OnInit {
  constructor(
    private database: DataserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  applicants: any[] = [];

  ngOnInit() {
    // You may want to remove this block if not needed
    if (localStorage.getItem('student') !== null) {
      localStorage.removeItem('student');
    }
    this.fetchData();
  }

  fetchData() {
    this.applicants = this.database.students.filter(
      (student: any) => student.status === 'pending'
    );
  }

  viewStudent(studentID: string) {
    localStorage.setItem('viewPDF', studentID);
    this.router.navigate(['/files']);
  }

  async rejectStudent(student: any): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to reject this student?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Reject',
          handler: () => {
            this.rejectStudents(student);
            this.applicants = [];
            this.fetchData();
          },
        },
      ],
    });

    await alert.present();
  }

  async approveStudent(student: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Are you sure you want to approve this student?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Approve',
          handler: () => {
            this.acceptStudent(student);
            this.applicants = [];
            this.fetchData();
          },
        },
      ],
    });
    await alert.present();
  }

  acceptStudent(studentID: string) {
    console.log('Selected studentID:', studentID);
    console.log('Database students:', this.database.students);

    for (let i = 0; i < this.database.students.length; i++) {
      if (this.database.students[i].studentID === studentID) {
        this.database.students[i].status = 'approved';
        console.log(
          'Student status updated to approved:',
          this.database.students[i]
        );
        break;
      }
    }

    console.log('Updated database students:', this.database.students);
  }

  rejectStudents(studentID: string) {
    console.log('Selected studentID:', studentID);
    console.log('Database students:', this.database.students);

    for (let i = 0; i < this.database.students.length; i++) {
      if (this.database.students[i].studentID === studentID) {
        this.database.students[i].status = 'rejected';
        console.log(
          'Student status updated to rejected:',
          this.database.students[i]
        );
        break;
      }
    }
    console.log('Updated database students:', this.database.students);
  }
}
