import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  // room columns

  columns: any[] = [
    { text: "Services Date", dataField: "room_type", width: "25%" },
    { text: "Services Description", dataField: "services_description", width: "55%" },
    { text: "Amount", dataField: "amount", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  ngOnInit(): void {
  }

}
