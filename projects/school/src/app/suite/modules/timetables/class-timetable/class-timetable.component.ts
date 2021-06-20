import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-class-timetable',
  templateUrl: './class-timetable.component.html',
  styleUrls: ['./class-timetable.component.css']
})
export class ClassTimetableComponent implements OnInit {

  constructor() { }

  @ViewChild('timetableCodeReference') timetableCode: jqxInputComponent;
  @ViewChild('timetableNameReference') timetableName: jqxInputComponent;
  @ViewChild('timetableDateReference') timetableDate: jqxDateTimeInputComponent;
  @ViewChild('classNameReference') className: jqxInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;

  navHeading: any[] = [
    { text: "All Timetables", url: "/suite/timetables/all-timetables" },
    { text: "Full Timetable", url: "/suite/timetables/full-timetable" },
    { text: "Class Timetable", url: "/suite/timetables/class-timetable" },
  ];

  ngOnInit(): void {
  }

  // --------------------------------------------------------------------------------------------------

  timetableSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'period', type: 'string' },
      { name: 'monday', type: 'string' },
      { name: 'tuesday', type: 'string' },
      { name: 'wednesday', type: 'string' },
      { name: 'thursday', type: 'string' },
      { name: 'friday', type: 'string' },
    ],
    id: 'id',
  }

  timetableDataAdapter: any = new jqx.dataAdapter(this.timetableSource);

  timetableColumns: any[] = [
    { text: "Period", dataField: "period", align: "center", width: "15%" },
    { text: "Monday", dataField: "monday", align: "center", width: "17%" },
    { text: "Tuesday", dataField: "tuesday", align: "center", width: "17%" },
    { text: "Wednesday", dataField: "wednesday", align: "center", width: "17%" },
    { text: "Thursday", dataField: "thursday", align: "center", width: "17%" },
    { text: "Friday", dataField: "friday", align: "center", width: "17%" },
  ];

}
