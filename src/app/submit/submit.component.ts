import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
})
export class SubmitComponent implements OnInit {
  firstname: string = '';
  middlename: string = '';
  lastname: string = '';
  birthdate: string = '';
  placeofbirth: string = '';
  streetaddress: string = '';
  city: string = '';
  portalzipcode: string = '';
  phonenumber: string = '';
  school: string = '';
  course: string = '';
  gwa: number = 0;

  constructor(
    private router: Router,
    private database: DataserviceService,
    private alertController: AlertController,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  toHome() {
    this.router.navigate(['folder/Home']);
  }
  // indigency: string = '';
  // grade: string = '';
  // id: string = '';
  // cor: string = '';
  indigencyFile: string = '';
  gradeFile: string = '';
  idFile: string = '';
  corFile: string = '';
  gradeFileName: string = ''; // To store the grade file name
  corFileName: string = ''; // To store the COR file name
  idFileName: string = ''; // To store the ID file name
  indigencyFileName: string = ''; // To store the indigency file name

  // getGradeFile(event: any) {
  //   this.gradeFile = event.target.files[0];
  //   console.log('file', this.indigencyFile);
  // }
  // getCORFile(event: any) {
  //   this.corFile = event.target.files[0];
  //   console.log('file', this.indigencyFile);
  // }
  // getIndigencyFile(event: any) {
  //   this.indigencyFile = event.target.files[0];
  //   console.log('file', this.indigencyFile);
  // }
  // getIDFile(event: any) {
  //   this.idFile = event.target.files[0];
  //   console.log('file', this.indigencyFile);
  // }
  // getGrade(name: string) {
  //   this.grade = name;
  // }
  // getCOR(name: string) {
  //   this.grade = name;
  // }
  // getID(name: string) {
  //   this.grade = name;
  // }
  // getIndigency(name: string) {
  //   this.grade = name;
  // }
  getGradeFile(event: any) {
    this.gradeFile = event.target.files[0];
    this.gradeFileName = event.target.files[0].name; // Store the grade file name
    console.log('Grade file', this.gradeFile);
  }

  getCORFile(event: any) {
    this.corFile = event.target.files[0];
    this.corFileName = event.target.files[0].name; // Store the COR file name
    console.log('COR file', this.corFile);
  }

  getIDFile(event: any) {
    this.idFile = event.target.files[0];
    this.idFileName = event.target.files[0].name; // Store the ID file name
    console.log('ID file', this.idFile);
  }

  getIndigencyFile(event: any) {
    this.indigencyFile = event.target.files[0];
    this.indigencyFileName = event.target.files[0].name; // Store the indigency file name
    console.log('Indigency file', this.indigencyFile);
  }

  async toStatus() {
    // Create a FormData object
    let formData = new FormData();
    formData.set('indigency', this.indigencyFileName);
    formData.set('grade', this.gradeFileName);
    formData.set('id', this.idFileName);
    formData.set('cor', this.corFileName);
    formData.set('indigencyFile', this.indigencyFile);
    formData.set('gradeFile', this.gradeFile);
    formData.set('idFile', this.idFile);
    formData.set('corFile', this.corFile);
    // Submit the data to the API
    console.log(formData);
    this.http
      .post('http://localhost:3001/upload/uploadFiles', formData, {
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('Files uploaded successfully!', response);
        },
        (error) => {
          console.error('Error uploading files:', error);
        }
      );

    //creta a json using the datas
    //generate user id in string format
    const min = 10000; // Minimum value (inclusive)
    const max = 99999; // Maximum value (inclusive)

    let studentID = localStorage.getItem('studentID');
    for (let i = 0; i < this.database.students.length; i++) {
      if (this.database.students[i].studentID === studentID) {
        this.database.students[i].firstname = this.firstname;
        this.database.students[i].middlename = this.middlename;
        this.database.students[i].lastname = this.lastname;
        this.database.students[i].birthdate = this.birthdate;
        this.database.students[i].placeofbirth = this.placeofbirth;
        this.database.students[i].streetaddress = this.streetaddress;
        this.database.students[i].city = this.city;
        this.database.students[i].portalzipcode = this.portalzipcode;
        this.database.students[i].phonenumber = this.phonenumber;
        this.database.students[i].course = this.course;
        this.database.students[i].gwa = this.gwa;
        this.database.students[i].shcool = this.school;
        this.database.students[i].grades =
          '../../assets/backend/uploads/' + this.gradeFileName;
        this.database.students[i].cor =
          '../../assets/backend/uploads/' + this.corFileName;
        this.database.students[i].schoolid =
          '../../assets/backend/uploads/' + this.idFileName;
        this.database.students[i].indigency =
          '../../assets/backend/uploads/' + this.indigencyFileName;
        this.database.students[i].status = 'pending';
      }
    }
    console.log(this.database.students);

    const alert = await this.alertController.create({
      header: 'Submission Success',
      message: 'Thank you for Applying to us.',
      buttons: ['OK'],
    });

    await alert.present();
    //this.router.navigate(['folder/Scholarship Status']);
  }
  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const fileData = reader.result as string;
      // Save the fileData in your database or perform further processing
    };
    reader.readAsDataURL(file);
  }
}
