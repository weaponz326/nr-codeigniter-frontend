import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-bill-tables',
  templateUrl: './bill-tables.component.html',
  styleUrls: ['./bill-tables.component.css']
})
export class BillTablesComponent implements OnInit {

  constructor() { }

  @ViewChild("roomGridReference") roomGrid: jqxGridComponent;
  @ViewChild("servicesGridReference") servicesGrid: jqxGridComponent;

  // room columns

  roomColumns: any[] = [
    { text: "Room Type", dataField: "room_type", columngroup: "roomGroup", width: "30%" },
    { text: 'Rate', datafield: 'rate', columngroup: "roomGroup", width: "20%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'No. of Persons', datafield: 'personsNumber', columngroup: "roomGroup", width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: 'No. of Rooms', datafield: 'roomsNumber', columngroup: "roomGroup", width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: "Total", dataField: "total", columngroup: "roomGroup", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  roomColumnGroups: any[] = [
    { text: "Room Charges", align: "center", name: "roomGroup" }
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

  ngOnInit(): void {
  }

}
