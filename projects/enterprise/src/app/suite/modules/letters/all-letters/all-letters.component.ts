import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

@Component({
  selector: 'app-all-letters',
  templateUrl: './all-letters.component.html',
  styleUrls: ['./all-letters.component.css']
})
export class AllLettersComponent implements OnInit {

  constructor() { }

  @ViewChild('tabReference') tab: jqxTabsComponent;
  @ViewChild('receivedGridReference') receivedGrid: jqxGridComponent;
  @ViewChild('sentGridReference') sentGrid: jqxGridComponent;
  @ViewChild('addReceivedReference') addReceived: jqxButtonComponent;
  @ViewChild('addSentReference') addSent: jqxButtonComponent;
  
  receivedColumns: any[] = [
    { text: "Date Received", dataField: "date_received", filtertype: "range", width: "12%" },
    { text: "Sender", dataField: "sender", width: "24%" },
    { text: "Subject", dataField: "subject", width: "30%" },
    { text: "Letter Ref.", dataField: "reference_number", width: "15%" },
    { text: "Letter Date", dataField: "letter_date", filtertype: "range", width: "12%" },
    { text: "Attachments", dataField: "attachments", columntype: "button", width: "7%" },
  ];

  sentColumns: any[] = [
    { text: "Date Sent", dataField: "date_sent", filtertype: "range", width: "12%" },
    { text: "Receipient", dataField: "receipient", width: "24%" },
    { text: "Subject", dataField: "subject", width: "30%" },
    { text: "Letter Ref.", dataField: "reference_number", width: "15%" },
    { text: "Letter Date", dataField: "letter_date", filtertype: "range", width: "12%" },
    { text: "Attachments", dataField: "attachments", columntype: "button", width: "7%" },
  ];

  ngOnInit(): void {
  }

}
