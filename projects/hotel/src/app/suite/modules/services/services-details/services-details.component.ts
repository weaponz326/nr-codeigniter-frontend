import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild("gridReference") grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  // room columns

  columns: any[] = [
    { text: "Item Date", dataField: "room_type", width: "25%" },
    { text: "Item Description", dataField: "services_description", width: "55%" },
    { text: "Amount", dataField: "amount", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

}
