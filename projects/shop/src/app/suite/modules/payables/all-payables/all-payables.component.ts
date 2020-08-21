import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-payables',
  templateUrl: './all-payables.component.html',
  styleUrls: ['./all-payables.component.css']
})
export class AllPayablesComponent implements OnInit {

  @ViewChild("gridReference") grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Payable ID", dataField: "payable_code", width: "8%" },
    { text: "Date", dataField: "date", filtertype: "range", width: "10%" },
    { text: "Due Date", dataField: "due_date", filtertype: "range", width: "10%" },
    { text: "Invoice No.", dataField: "invoice_number", width: "8%" },
    { text: "Customer Name", dataField: "customer_name", width: "24%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']},
    { text: "Date Paid", dataField: "date_paid", filtertype: "range", width: "10%" },
    { text: "Outstanding", dataField: "outstanding", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

}
