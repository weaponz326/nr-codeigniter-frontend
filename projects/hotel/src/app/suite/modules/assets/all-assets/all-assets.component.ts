import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-assets',
  templateUrl: './all-assets.component.html',
  styleUrls: ['./all-assets.component.css']
})
export class AllAssetsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------

  columns: any[] = [
    { text: "Asset ID", dataField: "asset_id", width: "15%" },
    { text: "Asset Name", dataField: "asset_name", width: "30%" },
    { text: "Type", dataField: "type", width: "20%" },
    { text: "Location", dataField: "location", width: "20%" },
    { text: "Condition", dataField: "condition", width: "15%" },
  ];

}
