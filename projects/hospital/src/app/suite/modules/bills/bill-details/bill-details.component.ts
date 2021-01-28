import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  @ViewChild("appointmentsGridReference") appointmentsGrid: jqxGridComponent;
  @ViewChild("laboratoryGridReference") laboratoryGrid: jqxGridComponent;
  @ViewChild("dispensaryGridReference") dispensaryGrid: jqxGridComponent;
  @ViewChild("wardGridReference") wardGrid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  // appointments grid

  appointmentColumns: any[] = [
    { text: 'Appointment ID', columngroup: 'appointmentGroup', dataField: 'appointment_code', width: "30%" },
    { text: 'Appointment Date', columngroup: 'appointmentGroup', dataField: 'appointment_date', width: "40%" },
    { text: 'Amount', columngroup: 'appointmentGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  appointmentColumnGroups: any[] = [
    { text: "Appointments Charges", align: "center", name: "appointmentGroup" }
  ];

  // dispensary grid

  dispensaryColumns: any[] = [
    { text: 'Dispense ID', columngroup: 'dispensaryGroup', dataField: 'dispense_code', width: "30%" },
    { text: 'Dispense Date', columngroup: 'dispensaryGroup', dataField: 'dispense_date', width: "40%" },
    { text: 'Amount', columngroup: 'dispensaryGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  dispensaryColumnGroups: any[] = [
    { text: "Dispensary Charges", align: "center", name: "dispensaryGroup" }
  ];

  // laboratory grid

  laboratoryColumns: any[] = [
    { text: 'Laboratory ID', columngroup: 'laboratoryGroup', dataField: 'lab_code', width: "30%" },
    { text: 'Laboratory Date', columngroup: 'laboratoryGroup', dataField: 'lab_date', width: "40%" },
    { text: 'Amount', columngroup: 'laboratoryGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  laboratoryColumnGroups: any[] = [
    { text: "Laboratory Charges", align: "center", name: "laboratoryGroup" }
  ];

  // ward grid

  wardColumns: any[] = [
    { text: 'Ward No.', columngroup: 'wardGroup', dataField: 'ward_number', width: "30%" },
    { text: 'Days', columngroup: 'wardGroup', dataField: 'days', width: "20%" },
    { text: 'Daily Rate', columngroup: 'wardGroup', dataField: 'rate', width: "20%", cellsalign: 'right', cellsformat: 'c2' },
    { text: 'Amount', columngroup: 'wardGroup', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  wardColumnGroups: any[] = [
    { text: "Ward Charges", align: "center", name: "wardGroup" }
  ];

}
