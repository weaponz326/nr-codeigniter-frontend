import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';


@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.css']
})
export class ViewSheetComponent implements OnInit {

  constructor() { }

  @ViewChild('sheetButtonReference') button: jqxButtonComponent;
  @ViewChild('sheetGridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // --------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Member Name", dataField: "member_name", pinned: "true", width: "30%" },
  ];

}
