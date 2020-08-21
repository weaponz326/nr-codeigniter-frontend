import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  @ViewChild("detailsGridReference") detailsGrid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Item Description", dataField: "item_description", width: "70%" },
    { text: "Amount", dataField: "amount", width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

}
