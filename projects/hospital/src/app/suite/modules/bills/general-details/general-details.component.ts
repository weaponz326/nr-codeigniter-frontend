import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.css']
})
export class GeneralDetailsComponent implements OnInit {

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("buttonReference") button: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

  columns: any[] = [
    { text: 'Item', dataField: 'item', width: "70%" },
    { text: 'Amount', dataField: 'amount', width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];


}
