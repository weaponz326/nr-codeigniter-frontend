import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-deliveries',
  templateUrl: './all-deliveries.component.html',
  styleUrls: ['./all-deliveries.component.css']
})
export class AllDeliveriesComponent implements OnInit {

  @ViewChild('newDeliveryReference') newDeliveryButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Delivery ID", dataField: "delivery_code", width: "15%" },
    { text: "Customer Name", dataField: "customer_name", width: "45%" },
    { text: "Delivery Date", dataField: "delivery_date", filtertype: "range", width: "20%" },
    { text: "Delivery Status", dataField: "delivery_status", width: "20%" },
  ];

}
