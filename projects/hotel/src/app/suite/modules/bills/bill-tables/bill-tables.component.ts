import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';


@Component({
  selector: 'app-bill-tables',
  templateUrl: './bill-tables.component.html',
  styleUrls: ['./bill-tables.component.css']
})
export class BillTablesComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild("checkinGridReference") checkinGrid: jqxGridComponent;
  @ViewChild("servicesGridReference") servicesGrid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------------------

  // checkin columns

  checkinColumns: any[] = [
    { text: "Checkin ID", dataField: "checkin_code", columngroup: "checkinGroup", width: "20%" },
    { text: "Room Number", dataField: "room_number", columngroup: "checkinGroup", width: "25%" },
    { text: 'Rate', datafield: 'rate', columngroup: "checkinGroup", width: "20%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'No. of Nights', datafield: 'nightsNumber', columngroup: "checkinGroup", width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: "Amount", dataField: "total", columngroup: "checkinGroup", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  checkinColumnGroups: any[] = [
    { text: "Checkin Charges", align: "center", name: "checkinGroup" }
  ];

  // services charges

  servicesColumns: any[] = [
    { text: "Service Date", dataField: "service_date", columngroup: "servicesGroup", width: "20%" },
    { text: "Service Description", dataField: "service_description", columngroup: "servicesGroup", width: "60%" },
    { text: "Amount", dataField: "amount", columngroup: "servicesGroup", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  servicesColumnGroups: any[] = [
    { text: "Services Charges", align: "center", name: "servicesGroup" }
  ];

}
