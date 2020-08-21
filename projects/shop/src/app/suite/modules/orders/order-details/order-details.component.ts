import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @ViewChild("detailsGridReference") detailsGrid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Product ID", dataField: "productCode", width: "15%" },
    { text: "Product Name", dataField: "productName", width: "35%" },
    { text: 'Price', datafield: 'price', width: "15%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'Quantity', datafield: 'quantity', width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: "Total Price", dataField: "total_price", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

}
