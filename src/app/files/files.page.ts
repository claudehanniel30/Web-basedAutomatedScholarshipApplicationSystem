import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-files',
  templateUrl: './files.page.html',
  styleUrls: ['./files.page.scss'],
})
export class FilesPage implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private database: DataserviceService
  ) {}
  student: any = {}; // Default value
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  ngOnInit() {
    // Get the student from the local storage
    const studentData = localStorage.getItem('viewPDF');
    if (studentData !== null) {
      //loop through the students and find match id to the studentData
      for (let i = 0; i < this.database.students.length; i++) {
        if (this.database.students[i].studentID === studentData) {
          this.student = this.database.students[i];
          break;
        }
      }
    }
    console.log(this.student);
  }
}
