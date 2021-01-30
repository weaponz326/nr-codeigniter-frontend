import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  constructor() { }

  @ViewChild("inflowGridReference") inflowGrid: jqxGridComponent;
  @ViewChild("outflowGridReference") outflowGrid: jqxGridComponent;
  @ViewChild("netflowGridReference") netflowGrid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------------------------------------------

  // cash inflow grid columns
  inflowColumns: any[] = [
    { text: "Cash Inflow", dataField: "inflows", width: "20%" },
    { text: "January", dataField: "january", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "February", dataField: "february", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "March", dataField: "march", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "April", dataField: "april", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "May", dataField: "may", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "June", dataField: "june", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "July", dataField: "july", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "August", dataField: "august", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "September", dataField: "september", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "October", dataField: "october", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "November", dataField: "november", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "December", dataField: "december", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // cash outflow grid columns
  outflowColumns: any[] = [
    { text: "Cash Outflow", dataField: "inflows", width: "20%" },
    { text: "January", dataField: "january", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "February", dataField: "february", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "March", dataField: "march", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "April", dataField: "april", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "May", dataField: "may", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "June", dataField: "june", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "July", dataField: "july", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "August", dataField: "august", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "September", dataField: "september", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "October", dataField: "october", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "November", dataField: "november", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "December", dataField: "december", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // net cashflow grid columns
  netflowColumns: any[] = [
    { text: "Net Cash Flow", dataField: "inflows", width: "20%" },
    { text: "January", dataField: "january", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "February", dataField: "february", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "March", dataField: "march", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "April", dataField: "april", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "May", dataField: "may", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "June", dataField: "june", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "July", dataField: "july", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "August", dataField: "august", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "September", dataField: "september", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "October", dataField: "october", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "November", dataField: "november", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "December", dataField: "december", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

}
