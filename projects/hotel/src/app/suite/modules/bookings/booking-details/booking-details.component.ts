import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild("roomGridReference") roomGrid: jqxGridComponent;

  columns: any[] = [
    { text: "Room Type", dataField: "room_type", width: "60%" },
    { text: 'No. of Persons', datafield: 'personsNumber', width: "20%", cellsalign: 'right', columntype: 'numberinput' },
    { text: 'No. of Rooms', datafield: 'roomsNumber', width: "20%", cellsalign: 'right', columntype: 'numberinput' },
  ];

  ngOnInit(): void {
  }

}
