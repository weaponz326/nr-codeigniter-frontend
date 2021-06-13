import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { environment } from 'projects/school/src/environments/environment';

import { TeachersApiService } from '../teachers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { TeacherFormComponent } from '../teacher-form/teacher-form.component'


@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private teachersApi: TeachersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('teacherFormComponentReference') teacherForm: TeacherFormComponent;

  navHeading: any[] = [
    { text: "All Teachers", url: "/suite/teachers/all-teachers" },
    { text: "View Teacher", url: "/suite/teachers/view-teacher" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.teachersApi.getSingleTeacher()
      .subscribe(
        res => {
          console.log(res);

          if (res.date_of_birth != null){
            let dobArray = res.date_of_birth.split('-');
            this.teacherForm.dobYear.val(dobArray[0]);
            this.teacherForm.dobMonth.val(dobArray[1]);
            this.teacherForm.dobDay.val(dobArray[2]);
          }

          if (res.photo != null){
            this.teacherForm.imgSrc = environment.schoolUrl + res.photo;
          }

          this.teacherForm.firstName.val(res.first_name);
          this.teacherForm.lastName.val(res.last_name);
          this.teacherForm.sex.val(res.sex);
          this.teacherForm.photo.nativeElement.value = res.photo;
          this.teacherForm.nationality.val(res.nationality);
          this.teacherForm.religion.val(res.religion);
          this.teacherForm.phone.val(res.phone);
          this.teacherForm.email.val(res.email);
          this.teacherForm.address.val(res.address);
          this.teacherForm.state.val(res.state);
          this.teacherForm.city.val(res.city);
          this.teacherForm.postCode.val(res.post_code);
          this.teacherForm.term.val(res.term);
          this.teacherForm.teacherCode.val(res.teacher_code);
          this.teacherForm.department.val(res.department);
          this.teacherForm.education.val(res.education);
          this.teacherForm.grade.val(res.grade);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveTeacher(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a teacher");

    let dob = '';
    if (this.teacherForm.dobYear.val() == '' || this.teacherForm.dobMonth.val() == '' || this.teacherForm.dobDay.val() == '') dob = null;
    else dob = this.teacherForm.dobYear.val() + '-' + this.teacherForm.dobMonth.val() + '-' + this.teacherForm.dobDay.val();

    var teacherData = {
      school_id: sessionStorage.getItem('school_id'),
      first_name: this.teacherForm.firstName.val(),
      last_name: this.teacherForm.lastName.val(),
      sex: this.teacherForm.sex.val(),
      date_of_birth: dob,
      photo: this.teacherForm.image,
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

    this.teachersApi.putTeacher(teacherData)
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

    console.log(teacherData);
  }

  deleteTeacher(){
    console.log("dude... u are gonna delete the teacher?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.teachersApi.deleteTeacher()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/teachers/all-teachers');
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
