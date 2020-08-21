import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Payment ID", dataField: "payment_code", width: "15%" },
    { text: "Payment Date", dataField: "payment_date", filtertype: "range", width: "20%" },
    { text: "Student ID", dataField: "student_code", width: "15%" },
    { text: "Student Name", dataField: "student_name", width: "35%" },
    { text: 'Amount Paid', dataField: 'amount_paid', width: "15%", cellsalign: 'right', cellsformat: 'c2' }
  ];

}
