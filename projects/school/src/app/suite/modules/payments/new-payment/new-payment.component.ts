import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { SelectStudentComponent } from '../select-student/select-student.component'
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
  @ViewChild('studentNameReference') studentName: jqxInputComponent;
  @ViewChild('studentCodeReference') studentCode: jqxInputComponent;
  @ViewChild('billCodeReference') billCode: jqxInputComponent;

  @ViewChild("selectStudentComponentReference") selectStudent: SelectStudentComponent;
  @ViewChild("selectBillComponentReference") selectBill: SelectBillComponent;

  // stores db table ids of selected student and admission
  // to be retreived for sending to backend
  studentIdStore: any;
  admissionIdStore: any;
  billIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.addPayment.open();
  }

  studentSelected(student: any){
    console.log(student);

    this.studentName.val(student.student_name);
    this.studentCode.val(student.clinical_id);
    this.studentIdStore = student.id;
  }

  billSelected(bill: any){
    console.log(bill);

    this.billCode.val(bill.bill_code);
    this.billIdStore = bill.id;
  }

  savePayment(){
  }


}
