import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-marketting',
  templateUrl: './all-marketting.component.html',
  styleUrls: ['./all-marketting.component.css']
})
export class AllMarkettingComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Campaign Name", dataField: "campaign_name", width: "60%" },
    { text: "Campaign Type", dataField: "campaign_type", width: "40%" },
  ];

  ngOnInit(): void {
  }

}
