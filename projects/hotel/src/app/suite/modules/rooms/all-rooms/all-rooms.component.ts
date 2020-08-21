import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css']
})
export class AllRoomsComponent implements OnInit {

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ----------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Room No.", dataField: "room_number", width: "25%" },
    { text: "Room Type", dataField: "room_type", width: "50%" },
    { text: "Room Status", dataField: "room_status", width: "25%" },
  ];

}
