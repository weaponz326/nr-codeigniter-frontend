import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SubjectsApiService } from '../subjects-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { SubjectFormComponent } from '../subject-form/subject-form.component'


@Component({
  selector: 'app-view-subject',
  templateUrl: './view-subject.component.html',
  styleUrls: ['./view-subject.component.css']
})
export class ViewSubjectComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private subjectsApi: SubjectsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('subjectFormComponentReference') subjectForm: SubjectFormComponent;

  navHeading: any[] = [
    { text: "All Subjects", url: "/suite/subjects/all-subjects" },
    { text: "View Subject", url: "/suite/subjects/view-subject" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.subjectsApi.getSingleSubject()
      .subscribe(
        res => {
          console.log(res);
          this.subjectForm.subjectCode.val(res.subject_code);
          this.subjectForm.subjectName.val(res.subject_name);
          this.subjectForm.department.val(res.department);
          this.subjectForm.term.val(res.term);
          this.subjectForm.description.val(res.description);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveSubject(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a subject");

    var subjectData = {
      school_id: sessionStorage.getItem('school_id'),
      subject_code: this.subjectForm.subjectCode.val(),
      subject_name: this.subjectForm.subjectName.val(),
      department: this.subjectForm.department.val(),
      term: this.subjectForm.term.val(),
      description: this.subjectForm.description.val(),
    }

    this.subjectsApi.putSubject(subjectData)
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

    console.log(subjectData);
  }

  deleteSubject(){
    console.log("dude... u are gonna delete the subject?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.subjectsApi.deleteSubject()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/subjects/all-subjects');
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
