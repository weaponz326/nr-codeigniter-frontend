import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-checkin',
  templateUrl: './all-checkin.component.html',
  styleUrls: ['./all-checkin.component.css']
})
export class AllCheckinComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Check-In ID", dataField: "chwckin_code", width: "12%" },
    { text: "Check-In Date", dataField: "checkin_date", filtertype: "range", width: "18%" },
    { text: "Guest Name", dataField: "guest_name", width: "40%" },
    { text: "Guest ID", dataField: "guest_id", width: "12%" },
    { text: "Room No.", dataField: "room_number", width: "18%" },
  ];

  ngOnInit(): void {
  }

}
