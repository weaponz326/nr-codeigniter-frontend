import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SubjectsApiService } from '../subjects-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SubjectFormComponent } from '../subject-form/subject-form.component'


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(
    private router: Router,
    private subjectsApi: SubjectsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('subjectFormComponentReference') subjectForm: SubjectFormComponent;

  navHeading: any[] = [
    { text: "Add Subject", url: "/suite/subjects/add-subject" },
  ];

  ngOnInit(): void {
  }

  saveSubject(){
    console.log('u are saving a new subject');
    this.loadingSpinner.httpLoader.open();

    var subjectData = {
      school_id: sessionStorage.getItem('school_id'),
      subject_code: this.subjectForm.subjectCode.val(),
      subject_name: this.subjectForm.subjectName.val(),
      department: this.subjectForm.department.val(),
      term: this.subjectForm.term.val(),
      description: this.subjectForm.description.val(),
    }

    console.log(subjectData);

    this.subjectsApi.postSubject(subjectData)
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
