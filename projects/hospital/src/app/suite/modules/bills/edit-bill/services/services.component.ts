import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  @ViewChild("editWindowReference") editWindow: jqxWindowComponent;
  @ViewChild("editGridReference") editGrid: jqxGridComponent;

  // grid columns
  columns: any[] = [
    { text: "Date", dataField: "item_date", columntype: "datetimeinput", width: "30%" },
    { text: "Description", dataField: "description", width: "50%" },
    { text: "Amount", dataField: "amount", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  openWindow(){
    this.editWindow.open();
  }

  ngOnInit(): void {
  }

}
