import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { environment } from 'projects/school/src/environments/environment';

import { StudentsApiService } from '../students-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { StudentFormComponent } from '../student-form/student-form.component'


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private studentsApi: StudentsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('studentFormComponentReference') studentForm: StudentFormComponent;

  navHeading: any[] = [
    { text: "All Students", url: "/suite/students/all-students" },
    { text: "View Student", url: "/suite/students/view-student" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.studentsApi.getSingleStudent()
      .subscribe(
        res => {
          console.log(res);

          if (res.date_of_birth != null){
            let dobArray = res.date_of_birth.split('-');
            this.studentForm.dobYear.val(dobArray[0]);
            this.studentForm.dobMonth.val(dobArray[1]);
            this.studentForm.dobDay.val(dobArray[2]);
          }

          if (res.photo != null){
            this.studentForm.imgSrc = environment.schoolUrl + res.photo;
          }

          this.studentForm.firstName.val(res.first_name);
          this.studentForm.lastName.val(res.last_name);
          this.studentForm.sex.val(res.sex);
          this.studentForm.photo.nativeElement.value = res.photo;
          this.studentForm.nationality.val(res.nationality);
          this.studentForm.religion.val(res.religion);
          this.studentForm.email.val(res.email);
          this.studentForm.address.val(res.address);
          this.studentForm.state.val(res.state);
          this.studentForm.city.val(res.city);
          this.studentForm.postCode.val(res.post_code);
          this.studentForm.studentCode.val(res.student_code);
          this.studentForm.clas.val(res.clas);
          this.studentForm.term.val(res.term);
          this.studentForm.admissionDate.val(res.admission_date);
          this.studentForm.previousSchool.val(res.previous_school);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveStudent(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a student");

    let dob = '';
    if (this.studentForm.dobYear.val() == '' || this.studentForm.dobMonth.val() == '' || this.studentForm.dobDay.val() == '') dob = null;
    else dob = this.studentForm.dobYear.val() + '-' + this.studentForm.dobMonth.val() + '-' + this.studentForm.dobDay.val();

    var studentData = {
      account: sessionStorage.getItem('school_id'),
      first_name: this.studentForm.firstName.val(),
      last_name: this.studentForm.lastName.val(),
      sex: this.studentForm.sex.val(),
      date_of_birth: dob,
      photo: this.studentForm.image,
      nationality: this.studentForm.nationality.val(),
      religion: this.studentForm.religion.val(),
      email: this.studentForm.email.val(),
      address: this.studentForm.address.val(),
      state: this.studentForm.state.val(),
      city: this.studentForm.city.val(),
      post_code: this.studentForm.postCode.val(),
      student_code: this.studentForm.studentCode.val(),
      clas: this.studentForm.clas.val(),
      term: this.studentForm.term.val(),
      admission_date: this.studentForm.admissionDate.val(),
      previous_school: this.studentForm.previousSchool.val(),
    }

    this.studentsApi.putStudent(studentData)
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

    console.log(studentData);
  }

  deleteStudent(){
    console.log("dude... u are gonna delete the student?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.studentsApi.deleteStudent()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/students/all-students');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
