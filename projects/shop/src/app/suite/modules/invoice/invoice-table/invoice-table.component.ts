import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.css']
})
export class InvoiceTableComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild("gridReference") grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Product ID", dataField: "product_code", width: "15%" },
    { text: "Product Name", dataField: "product_name", width: "35%" },
    { text: 'Price', datafield: 'price', width: "15%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'Quantity', datafield: 'quantity', width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: "Total Price", dataField: "total_price", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

}
