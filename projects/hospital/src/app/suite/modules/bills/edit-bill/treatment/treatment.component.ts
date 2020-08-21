import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  @ViewChild("editWindowReference") editWindow: jqxWindowComponent;
  @ViewChild("editGridReference") editGrid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openWindow(){
    this.editWindow.open();
  }

  // widgets
  // ------------------------------------------------------------------------------------------------

  // grid columns
  columns: any[] = [
    { text: "Date", dataField: "item_date", columntype: "datetimeinput", width: "30%" },
    { text: "Description", dataField: "description", width: "50%" },
    { text: "Amount", dataField: "amount", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

}
