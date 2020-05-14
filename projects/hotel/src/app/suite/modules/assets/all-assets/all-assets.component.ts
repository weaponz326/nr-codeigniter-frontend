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

  columns: any[] = [
    { text: "Asset ID", dataField: "asset_id", width: "20%" },
    { text: "Type", dataField: "type", width: "30%" },
    { text: "Location", dataField: "location", width: "30%" },
    { text: "Status", dataField: "status", width: "20%" },
  ];

  ngOnInit(): void {
  }

}
