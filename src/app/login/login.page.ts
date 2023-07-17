import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailaddress: string = '';
  password: string = '';
role: any;

  constructor(
    private menu: MenuController,
    private router: Router,
    private database: DataserviceService
  ) {}

  ionViewWillEnter() {}

  ngOnInit() {
    if (localStorage.getItem('studentID') != null) {
      this.router.navigate(['/folder/Submit Requirements']);
    }
    if (localStorage.getItem('adminID') != null) {
      this.router.navigate(['/folder/Applicant Lists']);
    }

    this.menu.enable(false);
    console.log(this.database.students[0].email);
  }

  submitLogin() {
    if (this.database.students && this.database.students.length > 0) {
      for (let i = 0; i < this.database.students.length; i++) {
        if (
          this.database.students[i].email &&
          this.database.students[i].email === this.emailaddress
        ) {
          if (this.database.students[i].password === this.password) {
            localStorage.setItem(
              'studentID',
              this.database.students[i].studentID
            );
            this.router.navigate(['/folder/Submit Requirements']);
          } else {
            console.log('Invalid password');
          }
          return; // Exit the loop once the email is found
        }
      }
      if (
        this.database.admin.email == this.emailaddress &&
        this.database.admin.password == this.password
      ) {
        localStorage.setItem('adminID', this.database.admin.adminID);
        this.router.navigate(['/folder/Applicant Lists']);
      }
      console.log('Email not found');
    } else {
      console.log('No student data available');
    }
  }
}
