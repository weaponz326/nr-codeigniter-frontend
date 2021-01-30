import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-purchasing',
  templateUrl: './all-purchasing.component.html',
  styleUrls: ['./all-purchasing.component.css']
})
export class AllPurchasingComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Purchasing ID", dataField: "purchasing_code", width: "20%" },
    { text: "Purchasing Date", dataField: "purchasing_date", filtertype: "range", width: "25%" },
    { text: "Supplier Name", dataField: "supplier_name", width: "55%" },
  ];

}
