import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
})
export class ApplicationListComponent implements OnInit {
  scholars: any[] = [];

  constructor(private database: DataserviceService) {}
  ngOnInit() {
    // You may want to remove this block if not needed
    if (localStorage.getItem('student') !== null) {
      localStorage.removeItem('student');
    }
    this.fetchData();
  }

  fetchData() {
    this.scholars = this.database.students.filter(
      (student: any) => student.status === 'approved'
    );
  }
}
