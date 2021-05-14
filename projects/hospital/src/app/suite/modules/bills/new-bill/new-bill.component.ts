import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { SelectPatientComponent } from '../select-patient/select-patient.component'
import { SelectAdmissionComponent } from '../select-admission/select-admission.component'

import { BillsApiService } from '../bills-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  constructor(private router: Router, private billsApi: BillsApiService) { }

  @ViewChild("addBillReference") addBill: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('billCodeReference') billCode: jqxInputComponent;
  @ViewChild('billDateReference') billDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('admissionCodeReference') admissionCode: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;
  @ViewChild("selectAdmissionComponentReference") selectAdmission: SelectAdmissionComponent;

  // stores db table ids of selected patient and admission
  // to be retreived for sending to backend
  patientIdStore: any;
  admissionIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.addBill.open();
  }

  closeWindow(){
    this.addBill.close();
  }

  patientSelected(patient: any){
    console.log(patient);

    this.patientName.val(patient.patient_name);
    this.patientCode.val(patient.clinical_id);
    this.patientIdStore = patient.id;
  }

  admissionSelected(admission: any){
    console.log(admission);

    this.admissionCode.val(admission.admission_code);
    this.admissionIdStore = admission.id;
  }

  saveBill(){
    this.loadingSpinner.httpLoader.open();

    let billData = {
      account: sessionStorage.getItem('hospital_id'),
      bill_code: this.billCode.val(),
      bill_date: this.billDate.val(),
      patient: this.patientIdStore,
      admission: this.admissionIdStore
    }

    this.billsApi.postBill(billData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('bill_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/bills/view-bill');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(billData);
  }

}
