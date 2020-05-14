import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-guests',
  templateUrl: './all-guests.component.html',
  styleUrls: ['./all-guests.component.css']
})
export class AllGuestsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Guest ID", dataField: "guest_code", width: "25%" },
    { text: "Guest Name", dataField: "guest_name", width: "50%" },
    { text: "Phone No.", dataField: "phone", width: "25%" }
  ];

  ngOnInit(): void {
  }

}
