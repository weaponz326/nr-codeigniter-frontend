import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AdmissionsApiService } from '../admissions-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { AdmissionFormComponent } from '../admission-form/admission-form.component'

@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.css']
})
export class NewAdmissionComponent implements OnInit {

  constructor(
    private router: Router,
    private admissionsApi: AdmissionsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('admissionFormComponentReference') admissionForm: AdmissionFormComponent;

  navHeading: any[] = [
    { text: "New Admission", url: "/suite/admissions/new-admission" },
  ];

  ngOnInit(): void {
  }

  saveAdmission(){
    console.log('u are saving a new admission');
    this.loadingSpinner.httpLoader.open();

    var admissionData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      admission_code: this.admissionForm.admissionCode.val(),
      admission_date: this.admissionForm.admissionDate.val(),
      discharge_date: this.admissionForm.dischargeDate.val(),
      patient_id: this.admissionForm.patientIdStore,
      admission_status: this.admissionForm.admissionStatus.val(),
    }

    console.log(admissionData);

    this.admissionsApi.postAdmission(admissionData)
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
