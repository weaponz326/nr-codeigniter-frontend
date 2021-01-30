import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Order ID", dataField: "order_code", width: "25%" },
    { text: "Customer Name", dataField: "customer_name", width: "50%" },
    { text: "Order Date", dataField: "order_date", filtertype: "range", width: "25%" },
  ];

}
