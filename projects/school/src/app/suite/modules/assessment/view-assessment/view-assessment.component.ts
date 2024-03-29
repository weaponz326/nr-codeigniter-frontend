import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AssessmentApiService } from '../assessment-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { AssessmentFormComponent } from '../assessment-form/assessment-form.component'
import { AssessmentTableComponent } from '../assessment-table/assessment-table.component'


@Component({
  selector: 'app-view-assessment',
  templateUrl: './view-assessment.component.html',
  styleUrls: ['./view-assessment.component.css']
})
export class ViewAssessmentComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private assessmentApi: AssessmentApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('assessmentFormComponentReference') assessmentForm: AssessmentFormComponent;
  @ViewChild('assessmentTableComponentReference') assessmentTable: AssessmentTableComponent;

  navHeading: any[] = [
    { text: "All Assessment", url: "/suite/assessment/all-assessment" },
    { text: "View Assessment", url: "/suite/assessment/view-assessment" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.assessmentApi.getSingleAssessment()
      .subscribe(
        res => {
          console.log(res);
          this.assessmentForm.assessmentCode.val(res.assessment_code);
          this.assessmentForm.assessmentName.val(res.assessment_name);
          this.assessmentForm.assessmentDate.val(res.assessment_date);
          this.assessmentForm.term.val(res.term);
          this.assessmentForm.subject.val(res.subject.subject_name);
          this.assessmentForm.clas.val(res.clas.class_name);
          // this.assessmentForm.termIdStore = res.term.id;
          this.assessmentForm.classIdStore = res.clas.id;
          this.assessmentForm.subjectIdStore = res.subject.id;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveAssessment(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a assessment");

    var assessmentData = {
      account: sessionStorage.getItem('school_id'),
      assessment_code: this.assessmentForm.assessmentCode.val(),
      assessment_name: this.assessmentForm.assessmentName.val(),
      assessment_date: this.assessmentForm.assessmentDate.val(),
      // term: this.assessmentForm.termIdStore,
      subject: this.assessmentForm.subjectIdStore,
    }

    this.assessmentApi.putAssessment(assessmentData)
      .subscribe(
        res => {
          console.log(res);
          this.assessmentTable.saveSheet();
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(assessmentData);

    this.assessmentTable.saveSheet();
  }

  deleteAssessment(){
    console.log("dude... u are gonna delete the assessment?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.assessmentApi.deleteAssessment()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/assessment/all-assessment');
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
