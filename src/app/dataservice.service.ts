import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  public admin: any = {
    adminID: 'admin',
    email: 'admin@gmail.com',
    password: 'admin@password',
  };
  public students: any = [
    {
      studentID: '864537',
      firstname: 'John',
      middlename: 'Michael',
      lastname: 'Anderson',
      birthdate: '1995-06-15',
      placeofbirth: 'New York City',
      streetaddress: '123 Main Street',
      city: 'New York',
      portalzipcode: '10001',
      phonenumber: '555-1234',
      course: 'Computer Science',
      gwa: 1.4,
      email: 'johnmichaelanderson@gmail.com',
      password: 'John1234',
      grades: '../../assets/docs/filename.pdf',
      cor: '../../assets/docs/filename.pdf',
      schoolid: '../../assets/docs/filename.pdf',
      indigency: '../../assets/docs/filename.pdf',
    },

    {
      studentID: '219408',
      firstname: 'Matthew',
      middlename: 'William',
      lastname: 'Sullivan',
      birthdate: '1998-05-21',
      placeofbirth: 'Chicago',
      streetaddress: '456 Elm Street',
      city: 'Chicago',
      portalzipcode: '60601',
      phonenumber: '555-5678',
      course: 'Computer Engineering',
      gwa: '1.5',
      email: 'matthewwilliamsullivan@gmail.com',
      password: 'Matthew12',
      grades: '../../assets/docs/filename.pdf',
      cor: '../../assets/docs/filename.pdf',
      schoolid: '../../assets/docs/filename.pdf',
      indigency: '../../assets/docs/filename.pdf',
    },

    {
      studentID: '752691',
      firstname: 'Andrew',
      middlename: 'Joseph',
      lastname: 'Collins',
      birthdate: '1997-03-25',
      placeofbirth: 'Chicago',
      streetaddress: '123 Oak Street',
      city: 'Chicago',
      portalzipcode: '60601',
      phonenumber: '555-1234',
      course: 'Computer Science',
      gwa: '1.75',
      email: 'andrewjosephcollins@gmail.com',
      password: 'Andrew12',
      grades: '../../assets/docs/filename.pdf',
      cor: '../../assets/docs/filename.pdf',
      schoolid: '../../assets/docs/filename.pdf',
      indigency: '../../assets/docs/filename.pdf',
      status: 'pending',
    },

    {
      studentID: '752691',
      firstname: 'Sophia',
      middlename: 'Rose',
      lastname: 'Johnson',
      birthdate: '1998-09-17',
      placeofbirth: 'Los Angeles',
      streetaddress: '456 Pine Street',
      city: 'Los Angeles',
      portalzipcode: '90001',
      phonenumber: '555-5678',
      course: 'Business Administration',
      gwa: '1.50',
      email: 'sophiajohnson@gmail.com',
      password: 'Sophia12',
      grades: '../../assets/docs/filename.pdf',
      cor: '../../assets/docs/filename.pdf',
      schoolid: '../../assets/docs/filename.pdf',
      indigency: '../../assets/docs/filename.pdf',
      status: 'pending',
    },

    {
      studentID: '752691',
      firstname: 'Jacob',
      middlename: 'Alexander',
      lastname: 'Smith',
      birthdate: '1999-07-10',
      placeofbirth: 'Miami',
      streetaddress: '789 Palm Avenue',
      city: 'Miami',
      portalzipcode: '33101',
      phonenumber: '555-9876',
      course: 'Psychology',
      gwa: '1.25',
      email: 'jacobsmith@gmail.com',
      password: 'Jacob12',
      grades: '../../assets/docs/filename.pdf',
      cor: '../../assets/docs/filename.pdf',
      schoolid: '../../assets/docs/filename.pdf',
      indigency: '../../assets/docs/filename.pdf',
      status: 'pending',
    },

    {
      studentID: '752691',
      firstname: 'Ava',
      middlename: 'Grace',
      lastname: 'Anderson',
      birthdate: '1997-11-28',
      placeofbirth: 'San Francisco',
      streetaddress: '123 Elm Street',
      city: 'San Francisco',
      portalzipcode: '94101',
      phonenumber: '555-2468',
      course: 'Art History',
      gwa: '2.00',
      email: 'avagraceanderson@gmail.com',
      password: 'Ava12',
      grades: '../../assets/docs/filename.pdf',
      cor: '../../assets/docs/filename.pdf',
      schoolid: '../../assets/docs/filename.pdf',
      indigency: '../../assets/docs/filename.pdf',
      status: 'pending',
    },
  ];

  constructor() {}
}