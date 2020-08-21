import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-menu-items',
  templateUrl: './all-menu-items.component.html',
  styleUrls: ['./all-menu-items.component.css']
})
export class AllMenuItemsComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Item ID", dataField: "item_code", width: "25%" },
    { text: "Item Name", dataField: "item_name", width: "50%" },
    { text: "Price", dataField: "price", width: "25%", cellsalign: 'right', cellsformat: 'c2' },
  ];

}
