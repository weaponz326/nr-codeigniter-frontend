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
  // -------------------------------------------------------------------------------------------------

  // grid columns
  columns: any[] = [
    { text: "Menu Item", dataField: "menu_item", width: "45%" },
    { text: 'Price', datafield: 'price', width: "20%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'Quantity', datafield: 'quantity', width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: "Total Price", dataField: "total_price", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

}
