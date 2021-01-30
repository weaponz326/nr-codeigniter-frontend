import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-files-table',
  templateUrl: './files-table.component.html',
  styleUrls: ['./files-table.component.css']
})
export class FilesTableComponent implements OnInit {

  constructor() { }

  @ViewChild('addButtonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // -----------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "File No.", dataField: "folder_number", width: "25%" },
    { text: "File Name", dataField: "folder_name", width: "55%" },
    { text: "Date Added", dataField: "date_added", filtertype: "range", width: "20%" },
  ]

}
