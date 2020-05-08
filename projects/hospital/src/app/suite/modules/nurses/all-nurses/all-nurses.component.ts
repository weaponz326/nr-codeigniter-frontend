import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-nurses',
  templateUrl: './all-nurses.component.html',
  styleUrls: ['./all-nurses.component.css']
})
export class AllNursesComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Nurse ID", dataField: "nurse_code", width: "20%" },
    { text: "Nurse Name", dataField: "nurse_name", width: "45%" },
    { text: "Department", dataField: "department", width: "35%" },
  ];

  ngOnInit(): void {
  }

}
