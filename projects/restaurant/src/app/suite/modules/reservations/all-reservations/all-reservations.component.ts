import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.css']
})
export class AllReservationsComponent implements OnInit {

  constructor() { }

  @ViewChild('newReservationReference') newReservationButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Reservation ID", dataField: "reservation_code", width: "15%" },
    { text: "Customer Name", dataField: "customer_name", width: "45%" },
    { text: "Arrival Date", dataField: "arrival_date", filtertype: "range", width: "20%" },
    { text: "Reservation Status", dataField: "reservation_status", width: "20%" },
  ];

  ngOnInit(): void {
  }

}
