import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AdmissionsApiService } from '../admissions-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { AdmissionFormComponent } from '../admission-form/admission-form.component'

@Component({
  selector: 'app-view-admission',
  templateUrl: './view-admission.component.html',
  styleUrls: ['./view-admission.component.css']
})
export class ViewAdmissionComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private admissionsApi: AdmissionsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('admissionFormComponentReference') admissionForm: AdmissionFormComponent;

  navHeading: any[] = [
    { text: "All Admissions", url: "/suite/admissions/all-admissions" },
    { text: "View Admission", url: "/suite/admissions/view-admission" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.admissionsApi.getSingleAdmission()
      .subscribe(
        res => {
          console.log(res);
          this.admissionForm.admissionCode.val(res.admission_code);
          this.admissionForm.admissionDate.val(res.admission_date);
          this.admissionForm.dischargeDate.val(res.discharge_date);
          this.admissionForm.patientIdStore = res.patient.id;
          this.admissionForm.patientName.val(res.patient.patient_name);
          this.admissionForm.patientCode.val(res.patient.clinical_number);
          this.admissionForm.admissionStatus.val(res.admission_status);
          this.admissionForm.ward.val(res.ward);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveAdmission(){
    console.log('u are updating an admission');
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

    this.admissionsApi.putAdmission(admissionData)
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

  deleteAdmission(){
    console.log("dude... u are gonna delete the admission?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.admissionsApi.deleteAdmission()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/admissions/all-admissions');
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
