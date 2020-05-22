import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-planning',
  templateUrl: './all-planning.component.html',
  styleUrls: ['./all-planning.component.css']
})
export class AllPlanningComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Plan ID", dataField: "plan_code", width: "18%" },
    { text: "Start Date", dataField: "start_date", filtertype: "range", width: "20%" },
    { text: "End Date", dataField: "end_date", filtertype: "range", width: "20%" },
    { text: "Manufacturing ID", dataField: "manufcturing_code", width: "18%" },
    { text: "Plan Status", dataField: "plan_status", width: "24%" },
  ];

  ngOnInit(): void {
  }

}
