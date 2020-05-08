import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-wards',
  templateUrl: './all-wards.component.html',
  styleUrls: ['./all-wards.component.css']
})
export class AllWardsComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Ward No.", dataField: "ward_number", width: "20%" },
    { text: "Ward Name", dataField: "ward_name", width: "45%" },
    { text: "Ward Type", dataField: "ward_type", width: "35%" },
  ];

  ngOnInit(): void {
  }

}
