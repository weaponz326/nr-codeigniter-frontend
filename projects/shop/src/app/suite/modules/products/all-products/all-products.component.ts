import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Product ID", dataField: "product_code", width: "15%" },
    { text: "Product Name", dataField: "product_name", width: "50%" },
    { text: 'Price', datafield: 'price', width: "20%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'Stock', datafield: 'stock', width: "15%", cellsalign: 'right', columntype: 'numberinput' },
  ];

  ngOnInit(): void {
  }

}
