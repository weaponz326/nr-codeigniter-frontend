import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-fees-details',
  templateUrl: './fees-details.component.html',
  styleUrls: ['./fees-details.component.css']
})
export class FeesDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild("detailsGridReference") detailsGrid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Item Description", dataField: "item_description", width: "70%" },
    { text: "Amount", dataField: "amount", width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  onItemAddCommit(e: any){

  }

  onItemEditCommit(e: any){

  }

  onItemDeleteCommit(e: any){

  }

}
