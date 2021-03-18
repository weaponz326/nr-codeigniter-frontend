import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AssessmentApiService } from '../assessment-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { AssessmentFormComponent } from '../assessment-form/assessment-form.component'


@Component({
  selector: 'app-new-assessment',
  templateUrl: './new-assessment.component.html',
  styleUrls: ['./new-assessment.component.css']
})
export class NewAssessmentComponent implements OnInit {

  constructor(
    private router: Router,
    private assessmentApi: AssessmentApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('assessmentFormComponentReference') assessmentForm: AssessmentFormComponent;

  navHeading: any[] = [
    { text: "New Assessment", url: "/suite/assessment/new-assessment" },
  ];

  ngOnInit(): void {
  }

  saveAssessment(){
    console.log('u are saving a new assessment');
    this.loadingSpinner.httpLoader.open();

    var assessmentData = {
      school_id: sessionStorage.getItem('school_id'),
      assessment_code: this.assessmentForm.assessmentCode.val(),
      assessment_name: this.assessmentForm.assessmentName.val(),
      assessment_date: this.assessmentForm.assessmentDate.val(),
      term: this.assessmentForm.termIdStore,
      subject: this.assessmentForm.subjectIdStore,
    }

    console.log(assessmentData);

    this.assessmentApi.postAssessment(assessmentData)
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
