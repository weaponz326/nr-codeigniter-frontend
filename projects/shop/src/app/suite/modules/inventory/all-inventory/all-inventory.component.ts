import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-inventory',
  templateUrl: './all-inventory.component.html',
  styleUrls: ['./all-inventory.component.css']
})
export class AllInventoryComponent implements OnInit {

  @ViewChild("gridReference") grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------

  columns: any[] = [
    { text: "Product ID", dataField: "product_code", width: "10%" },
    { text: "Product Name", dataField: "product_name", width: "30%" },
    { text: "Location", dataField: "location", width: "20%" },
    { text: "Container", dataField: "container", width: "15%" },
    { text: "Bin No.", dataField: "bin_number", width: "15%" },
    { text: "Quantity", dataField: "quantity", width: "10%", cellsalign: 'right' },
  ];

}
