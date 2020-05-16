import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-procurement',
  templateUrl: './all-procurement.component.html',
  styleUrls: ['./all-procurement.component.css']
})
export class AllProcurementComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Order ID", dataField: "order_code", width: "12%" },
    { text: "Order Date", dataField: "order_date", filtertype: "range", width: "18%" },
    { text: "Order Type", dataField: "order_type", width: "20%" },
    { text: "Vendor Name", dataField: "vendor_name", width: "30%" },
    { text: "Order Status", dataField: "order_status", width: "20%" },
  ];

  ngOnInit(): void {
  }

}
