import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-equipment',
  templateUrl: './all-equipment.component.html',
  styleUrls: ['./all-equipment.component.css']
})
export class AllEquipmentComponent implements OnInit {

  constructor() { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Equipment ID", dataField: "equipment_id", width: "20%" },
    { text: "Equipment Name", dataField: "equipment_name", width: "35%" },
    { text: "Type", dataField: "type", width: "25%" },
    { text: "Condition", dataField: "condition", width: "20%" },
  ];

}
