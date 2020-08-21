import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------

  columns: any[] = [
    { text: "Product ID", dataField: "product_code", width: "20%" },
    { text: "Product Name", dataField: "product_name", width: "50%" },
    { text: "Product Type", dataField: "product_type", width: "30%" },
  ];

}
