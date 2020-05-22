import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.css']
})
export class AllWorkersComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Worker ID", dataField: "worker_code", width: "15%" },
    { text: "Worker Name", dataField: "worker_name", width: "35%" },
    { text: "Department", dataField: "department", width: "25%" },
    { text: "Job", dataField: "job", width: "25%" }
  ];

  ngOnInit(): void {
  }

}
