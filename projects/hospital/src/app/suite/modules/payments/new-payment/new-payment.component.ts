import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { SelectPatientComponent } from '../select-patient/select-patient.component'
import { SelectAdmissionComponent } from '../select-admission/select-admission.component'
import { SelectBillComponent } from '../select-bill/select-bill.component'

@Component({
  selector: 'app-new-payment',
  templateUrl: './new-payment.component.html',
  styleUrls: ['./new-payment.component.css']
})
export class NewPaymentComponent implements OnInit {

  constructor() { }

  @ViewChild("addPaymentReference") addPayment: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('paymentCodeReference') paymentCode: jqxInputComponent;
  @ViewChild('paymentDateReference')paymentDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('admissionCodeReference') admissionCode: jqxInputComponent;
  @ViewChild('billCodeReference') billCode: jqxInputComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;
  @ViewChild("selectAdmissionComponentReference") selectAdmission: SelectAdmissionComponent;
  @ViewChild("selectBillComponentReference") selectBill: SelectBillComponent;

  // stores db table ids of selected patient and admission
  // to be retreived for sending to backend
  patientIdStore: any;
  admissionIdStore: any;
  billIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.addPayment.open();
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

  billSelected(bill: any){
    console.log(bill);

    this.billCode.val(bill.bill_code);
    this.billIdStore = bill.id;
  }

  savePayment(){
  }

}
