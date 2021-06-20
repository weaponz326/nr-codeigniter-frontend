import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { PrescriptionsApiService } from '../prescriptions-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SelectPatientComponent } from '../select-patient/select-patient.component'


@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.css']
})
export class AddPrescriptionComponent implements OnInit {

  constructor(
    private router: Router,
    private prescriptionsApi: PrescriptionsApiService,
  ) { }

  @ViewChild("addPrescriptionReference") addPrescription: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild('prescriptionCodeReference') prescriptionCode: jqxInputComponent;
  @ViewChild('prescriptionDateReference') prescriptionDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;

  patientIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.addPrescription.open();
  }

  closeWindow(){
    this.addPrescription.close();
  }

  patientSelected(patient: any){
    console.log(patient);

    this.patientName.val(patient.patient_name);
    this.patientCode.val(patient.clinical_number);
    this.patientIdStore = patient.id;
  }

  savePrescription(){
    this.loadingSpinner.httpLoader.open();

    let prescriptionData = {
      account: sessionStorage.getItem('hospital_id'),
      prescription_code: this.prescriptionCode.val(),
      prescription_date: this.prescriptionDate.val(),
      patient: this.patientIdStore
    }

    this.prescriptionsApi.postPrescription(prescriptionData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('prescription_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/prescriptions/view-prescription');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(prescriptionData);
  }

}
