import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.css']
})
export class ViewSheetComponent implements OnInit {

  constructor() { }

  @ViewChild("sheetCodeReference")sheetCode: jqxInputComponent;
  @ViewChild("sheetNameReference")sheetName: jqxInputComponent;
  @ViewChild("sheetTypeReference")sheetType: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Sheets", url: "/suite/cashflow/all-sheets" },
    { text: "View Sheet", url: "/suite/cashflow/view-sheet" },
  ];

  // show sheet according to sheet type
  showSheet: string = "weekly";

  ngOnInit(): void {
  }

}
