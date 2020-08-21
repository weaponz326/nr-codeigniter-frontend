import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-quarterly',
  templateUrl: './quarterly.component.html',
  styleUrls: ['./quarterly.component.css']
})
export class QuarterlyComponent implements OnInit {

  @ViewChild("inflowGridReference") inflowGrid: jqxGridComponent;
  @ViewChild("outflowGridReference") outflowGrid: jqxGridComponent;
  @ViewChild("netflowGridReference") netflowGrid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------------------------------------------

  // cash inflow grid columns
  inflowColumns: any[] = [
    { text: "Cash Inflow", dataField: "inflows", width: "35%" },
    { text: "1st Quarter", dataField: "first_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "2nd Quarter", dataField: "second_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "3rd Quarter", dataField: "third_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "4th Quarter", dataField: "fourth_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "17%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // cash outflow grid columns
  outflowColumns: any[] = [
    { text: "Cash Outflow", dataField: "inflows", width: "35%" },
    { text: "1st Quarter", dataField: "first_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "2nd Quarter", dataField: "second_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "3rd Quarter", dataField: "third_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "4th Quarter", dataField: "fourth_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "17%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // net cash flow grid columns
  netflowColumns: any[] = [
    { text: "Net Cash Flow", dataField: "inflows", width: "35%" },
    { text: "1st Quarter", dataField: "first_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "2nd Quarter", dataField: "second_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "3rd Quarter", dataField: "third_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "4th Quarter", dataField: "fourth_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "17%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

}
