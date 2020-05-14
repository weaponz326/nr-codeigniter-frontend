import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Sevices ID", dataField: "services_code", width: "15%" },
    { text: "Sevices Type", dataField: "services_type", width: "35%" },
    { text: "Guest Name", dataField: "guest_name", width: "35%" },
    { text: "Guest ID", dataField: "guest_code", width: "15%" },
  ];

  ngOnInit(): void {
  }

}
