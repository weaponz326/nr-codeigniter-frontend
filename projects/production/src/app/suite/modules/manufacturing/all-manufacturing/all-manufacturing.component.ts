import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-manufacturing',
  templateUrl: './all-manufacturing.component.html',
  styleUrls: ['./all-manufacturing.component.css']
})
export class AllManufacturingComponent implements OnInit {

  @ViewChild("gridReference") grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  columns: any[] = [
    { text: "Manufacturing ID", dataField: "manufacturing_id", width: "10%" },
    { text: "Start Date", dataField: "start_date", filtertype: "range", width: "15%" },
    { text: "End Date", dataField: "end_date", filtertype: "range", width: "15%" },
    { text: "Product ID", dataField: "product_code", width: "10%" },
    { text: "Product Name", dataField: "product_name", width: "25%" },
    { text: "Quantity", dataField: "quantity", width: "10%", cellsalign: 'right' },
    { text: "Manufacturing Status", dataField: "manufacturing_status", width: "15%" },
  ];

}
