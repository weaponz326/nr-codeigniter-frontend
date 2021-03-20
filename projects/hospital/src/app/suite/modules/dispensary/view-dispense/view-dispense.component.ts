import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DispensaryApiService } from '../dispensary-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { SelectPrescriptionComponent } from '../select-prescription/select-prescription.component'


@Component({
  selector: 'app-view-dispense',
  templateUrl: './view-dispense.component.html',
  styleUrls: ['./view-dispense.component.css']
})
export class ViewDispenseComponent implements OnInit, AfterViewInit {

  @ViewChild('dispenseCodeReference') dispenseCode: jqxInputComponent;
  @ViewChild('dispenseDateReference') dispenseDate: jqxDateTimeInputComponent;
  @ViewChild('prescriptionCodeReference') prescriptionCode: jqxInputComponent;
  @ViewChild('prescriptionDateReference') prescriptionDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('doctorNameReference') doctorName: jqxInputComponent;
  @ViewChild('prescriptionGridReference') prescriptionGrid: jqxGridComponent;

  @ViewChild('savePrescriptionReference') saveButton: jqxButtonComponent;
  @ViewChild('deletePrescriptionReference') deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild("selectPrescriptionComponentReference") selectPrescription: SelectPrescriptionComponent;

  navHeading: any[] = [
    { text: "All Dispenses", url: "/suite/dispensary/all-dispense" },
    { text: "View Dispense", url: "/suite/dispensary/view-dispense" },
  ];

  // stores db table ids of selected patient and doctor
  // to be retreived for sending to backend
  prescriptionIdStore: any;

  constructor(
    private router: Router,
    private dispensaryApi: DispensaryApiService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dispensaryApi.getSingleDispensary()
      .subscribe(
        res => {
          console.log(res);
          this.dispenseCode.val(res.dispense_code);
          this.dispenseDate.val(res.dispense_date);
          this.prescriptionCode.val(res.prescription.prescription_code);
          this.prescriptionDate.val(res.prescription.prescription_date);
          this.prescriptionIdStore = res.prescription.patient.id;
          this.patientName.val(res.prescription.patient.patient_name);
          this.patientCode.val(res.prescription.patient.clinical_id);
          this.doctorName.val(res.prescription.doctor.doctor_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  prescriptionSelected(prescription: any){
    console.log(prescription);

    this.prescriptionIdStore = prescription.id;
    this.prescriptionCode.val(prescription.prescription_code);
    this.prescriptionDate.val(prescription.prescription_date);
    this.patientName.val(prescription.patient.patient_name);
    this.patientCode.val(prescription.patient.clinical_id);
    this.doctorName.val(prescription.doctor.doctor_name);
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  prescriptionColumns: any[] = [
    { text: "Prescription ID", dataField: "prescription_code", width: "30%" },
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Prescription Date", dataField: "prescription_date", width: "30%" },
  ];

  saveDispense(){
    let dispenseData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      prescription_code: this.prescriptionCode.val(),
      prescription_date: this.prescriptionDate.val(),
      prescription_id: this.prescriptionIdStore,
    }

    this.dispensaryApi.putDispensary(dispenseData)
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

    console.log(dispenseData);
  }

  deleteDispense(){
    console.log("dude... u are gonna delete the dispense?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.dispensaryApi.deleteDispensary()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/dispensary/all-dispense');
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
