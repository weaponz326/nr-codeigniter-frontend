import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-sales',
  templateUrl: './all-sales.component.html',
  styleUrls: ['./all-sales.component.css']
})
export class AllSalesComponent implements OnInit {

  constructor() { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  columns: any[] = [
    { text: "Sales ID", dataField: "sales_code", width: "10%" },
    { text: "Product Name", dataField: "product_name", width: "30%" },
    { text: "Product ID", dataField: "product_code", width: "10%" },
    { text: "Date", dataField: "date", filtertype: "range", width: "15%" },
    { text: "Unit Price", dataField: "unit_price", width: "10%", cellsalign: 'right', cellsformat: 'c2' },
    { text: "Quantity", dataField: "quantity", width: "10%", cellsalign: 'right' },
    { text: "Total Price", dataField: "total_price", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  ngOnInit(): void {
  }

}
