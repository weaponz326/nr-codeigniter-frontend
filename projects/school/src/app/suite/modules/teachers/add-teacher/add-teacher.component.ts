import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TeachersApiService } from '../teachers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { TeacherFormComponent } from '../teacher-form/teacher-form.component'


@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(
    private router: Router,
    private teachersApi: TeachersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('teacherFormComponentReference') teacherForm: TeacherFormComponent;

  navHeading: any[] = [
    { text: "Add Teacher", url: "/suite/teachers/add-teacher" },
  ];

  ngOnInit(): void {
  }

  saveTeacher(){
    console.log('u are saving a new teacher');
    this.loadingSpinner.httpLoader.open();

    let dob = '';
    if (this.teacherForm.dobYear.val() == '' || this.teacherForm.dobMonth.val() == '' || this.teacherForm.dobDay.val() == '') dob = null;
    else dob = this.teacherForm.dobYear.val() + '-' + this.teacherForm.dobMonth.val() + '-' + this.teacherForm.dobDay.val();

    var teacherData = {
      account: sessionStorage.getItem('school_id'),
      first_name: this.teacherForm.firstName.val(),
      last_name: this.teacherForm.lastName.val(),
      sex: this.teacherForm.sex.val(),
      date_of_birth: dob,
      nationality: this.teacherForm.nationality.val(),
      religion: this.teacherForm.religion.val(),
      phone: this.teacherForm.phone.val(),
      email: this.teacherForm.email.val(),
      address: this.teacherForm.address.val(),
      state: this.teacherForm.state.val(),
      city: this.teacherForm.city.val(),
      post_code: this.teacherForm.postCode.val(),
      term: this.teacherForm.term.val(),
      teacher_code: this.teacherForm.teacherCode.val(),
      department: this.teacherForm.department.val(),
      grade: this.teacherForm.grade.val(),
      education: this.teacherForm.education.val(),
    }

    console.log(teacherData);

    this.teachersApi.postTeacher(teacherData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('teacher_id', res.data.id);
            this.router.navigateByUrl('/suite/teachers/view-teacher');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
