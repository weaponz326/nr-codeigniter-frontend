import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { SelectPatientComponent } from '../select-patient/select-patient.component'
import { SelectAdmissionComponent } from '../select-admission/select-admission.component'


@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  @ViewChild("addBillReference") addBill: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('billCodeReference') billCode: jqxInputComponent;
  @ViewChild('billDateReference') billDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('admissionCodeReference') admissionCode: jqxInputComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;
  @ViewChild("selectAdmissionComponentReference") selectAdmission: SelectAdmissionComponent;

  // stores db table ids of selected patient and admission
  // to be retreived for sending to backend
  patientIdStore: any;
  admissionIdStore: any;

  constructor() { }

  ngOnInit(): void {
  }

  openWindow(){
    this.addBill.open();
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

  }

}
