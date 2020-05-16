import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'

@Component({
  selector: 'app-all-folders',
  templateUrl: './all-folders.component.html',
  styleUrls: ['./all-folders.component.css']
})
export class AllFoldersComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Folder No.", dataField: "folder_number", width: "20%" },
    { text: "Folder Name", dataField: "folder_name", width: "50%" },
    { text: "Date Created", dataField: "date_created", filtertype: "range", width: "15%" },
    { text: "Last Updated", dataField: "last_updated", filtertype: "range", width: "15%" },
  ]

  ngOnInit(): void {
  }

}
