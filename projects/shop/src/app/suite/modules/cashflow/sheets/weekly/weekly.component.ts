import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  constructor() { }

  @ViewChild("inflowGridReference") inflowGrid: jqxGridComponent;
  @ViewChild("outflowGridReference") outflowGrid: jqxGridComponent;
  @ViewChild("netflowGridReference") netflowGrid: jqxGridComponent;

  // cash inflow grid columns
  inflowColumns: any[] = [
    { text: "Cash Inflow", dataField: "inflows", width: "35%" },
    { text: "Week 1", dataField: "week_one", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 2", dataField: "week_two", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 3", dataField: "week_three", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 4", dataField: "week_four", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 5", dataField: "week_five", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // cash outflow grid columns
  outflowColumns: any[] = [
    { text: "Cash Outflows", dataField: "inflows", width: "35%" },
    { text: "Week 1", dataField: "week_one", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 2", dataField: "week_two", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 3", dataField: "week_three", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 4", dataField: "week_four", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 5", dataField: "week_five", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // net cash flow grid columns
  netflowColumns: any[] = [
    { text: "Net Cash Flow", dataField: "inflows", width: "35%" },
    { text: "Week 1", dataField: "week_one", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 2", dataField: "week_two", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 3", dataField: "week_three", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 4", dataField: "week_four", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Week 5", dataField: "week_five", width: "10%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  ngOnInit(): void {
  }

}
