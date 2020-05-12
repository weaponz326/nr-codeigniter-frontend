import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrls: ['./all-classes.component.css']
})
export class AllClassesComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  columns: any[] = [
    { text: "Class Name", dataField: "class_name", width: "40%" },
    { text: "Class Teacher", dataField: "class_teacher", width: "35%" },
    { text: "Term", dataField: "term", width: "25%" },
  ];

  ngOnInit(): void {
  }

}
