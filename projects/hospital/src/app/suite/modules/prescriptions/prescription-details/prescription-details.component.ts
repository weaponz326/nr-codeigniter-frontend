import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  columns: any[] = [
    { text: 'Medicine Name', dataField: 'medicine_name', width: "60%" },
    { text: 'Dosage', dataField: 'dosage', width: "40%" },
  ];

  ngOnInit(): void {
  }

}
