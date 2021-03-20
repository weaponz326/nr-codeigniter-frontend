import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { StudentsApiService } from '../students-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { StudentFormComponent } from '../student-form/student-form.component'

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor(
    private router: Router,
    private studentsApi: StudentsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('studentFormComponentReference') studentForm: StudentFormComponent;

  navHeading: any[] = [
    { text: "New Student", url: "/suite/students/new-student" },
  ];

  ngOnInit(): void {
  }

  saveStudent(){
    console.log('u are saving a new student');
    this.loadingSpinner.httpLoader.open();

    var studentData = {
      school_id: sessionStorage.getItem('school_id'),
      first_name: this.studentForm.firstName.val(),
      last_name: this.studentForm.lastName.val(),
      sex: this.studentForm.sex.val(),
      date_of_birth: this.studentForm.dob.val(),
      nationality: this.studentForm.nationality.val(),
      religion: this.studentForm.religion.val(),
      email: this.studentForm.email.val(),
      address: this.studentForm.address.val(),
      state: this.studentForm.state.val(),
      city: this.studentForm.city.val(),
      post_code: this.studentForm.postCode.val(),
      student_code: this.studentForm.studentCode.val(),
      class: this.studentForm.class.val(),
      term: this.studentForm.term.val(),
      admission_date: this.studentForm.admissionDate.val(),
      previous_school: this.studentForm.previousSchool.val(),
    }

    console.log(studentData);

    this.studentsApi.postStudent(studentData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
