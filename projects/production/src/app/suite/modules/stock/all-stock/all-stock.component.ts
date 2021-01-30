import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-stock',
  templateUrl: './all-stock.component.html',
  styleUrls: ['./all-stock.component.css']
})
export class AllStockComponent implements OnInit {

  constructor() { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------

  columns: any[] = [
    { text: "Material Name", dataField: "product_name", width: "35%" },
    { text: "Location", dataField: "location", width: "20%" },
    { text: "Container", dataField: "container", width: "15%" },
    { text: "Bin No.", dataField: "bin_number", width: "15%" },
    { text: "Quantity", dataField: "quantity", width: "15%" },
  ];

}
