import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-purchasing-details',
  templateUrl: './purchasing-details.component.html',
  styleUrls: ['./purchasing-details.component.css']
})
export class PurchasingDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild("detailsGridReference") detailsGrid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Item ID", dataField: "itemCode", width: "15%" },
    { text: "Description", dataField: "description", width: "35%" },
    { text: 'Price', datafield: 'price', width: "15%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'Quantity', datafield: 'quantity', width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: "Total Price", dataField: "total_price", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

}
