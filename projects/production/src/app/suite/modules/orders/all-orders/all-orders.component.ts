import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  @ViewChild("gridReference") grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Order ID", dataField: "order_code", width: "10%" },
    { text: "Order Date", dataField: "order_date", filtertype: "range", width: "15%" },
    { text: "Customer Name", dataField: "customer_name", width: "20%" },
    { text: "Product ID", dataField: "product_code", width: "10%" },
    { text: "Product Name", dataField: "product_name", width: "20%" },
    { text: "Quantity", dataField: "quantity", width: "10%", cellsalign: 'right' },
    { text: "Order Status", dataField: "order_status", width: "15%" },
  ];

}
