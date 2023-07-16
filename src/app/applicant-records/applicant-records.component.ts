import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-applicant-records',
  templateUrl: './applicant-records.component.html',
  styleUrls: ['./applicant-records.component.scss'],
})
export class ApplicantRecordsComponent implements OnInit {
  constructor(
    private database: DataserviceService,
    private route: ActivatedRoute
  ) {}

  applicants: any = [];
  ngOnInit() {
    this.route.params.subscribe((params) => {
      // Fetch data here or call a function to fetch data
      this.fetchData();
    });
  }

  fetchData() {
    // Fetch data from the service or perform any necessary operations
    this.applicants = this.database.students;
  }
}
