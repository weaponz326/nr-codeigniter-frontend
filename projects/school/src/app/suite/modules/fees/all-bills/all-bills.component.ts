import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit {

  constructor() { }

  @ViewChild('gridReference') grid: jqxGridComponent;
  @ViewChild('generateFeesReference') generateFees: jqxButtonComponent;
  @ViewChild('otherButtonReference') otherButton: jqxButtonComponent;

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "20%" },
    { text: "Student Name", dataField: "student_name", width: "40%" },
    { text: "Bill Date", dataField: "bill_date", width: "20%" },
    { text: "Amount", dataField: "amount", width: "20%", cellsalign: 'right', cellsformat: 'c2'}
  ];

  ngOnInit(): void {
  }

}
