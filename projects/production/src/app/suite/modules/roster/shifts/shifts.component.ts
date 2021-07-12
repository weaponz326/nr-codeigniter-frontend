import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { RosterApiService } from '../roster-api.service';
import { AddShiftComponent } from '../add-shift/add-shift.component'
import { EditShiftComponent } from '../edit-shift/edit-shift.component'

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit, AfterViewInit {

  constructor(private rosterApi: RosterApiService) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("buttonReference") button: jqxButtonComponent;

  @ViewChild('addShiftComponentReference') addShift: AddShiftComponent;
  @ViewChild('editShiftComponentReference') editShift: EditShiftComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.rosterApi.getShifts()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  onAddCommit(shiftData: any) {
    this.grid.addrow(null, shiftData);
  }

  onEditCommit(shiftData: any) {
    this.grid.updaterow(shiftData.id, shiftData);
  }

  onDeleteCommit(shiftId: number) {
    this.grid.deleterow(shiftId);
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'shift_name', type: 'string' },
      { name: 'start_time', type: 'string' },
      { name: 'end_time', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteRow(rowid, commit);
    }
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: 'Shift Name', dataField: 'shift_name', width: "50%" },
    { text: 'Start Time', dataField: 'start_time', width: "25%" },
    { text: 'End Time', dataField: 'end_time', width: "25%" },
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let shiftData = {
      roster: sessionStorage.getItem('roster_id'),
      shift_name: rowdata.shift_name,
      start_time: rowdata.start_time,
      end_time: rowdata.end_time,
    }

    console.log(shiftData);

    this.loadingSpinner.httpLoader.open();

    this.rosterApi.postShift(shiftData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.data.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  updateRow(rowid, newdata, commit) {
    console.log("u are about updating a row...");
    console.log(newdata);

    let shiftData = {
      roster: sessionStorage.getItem('roster_id'),
      shift_name: newdata.shift_name,
      start_time: newdata.start_time,
      end_time: newdata.end_time,
    }

    this.loadingSpinner.httpLoader.open();

    this.rosterApi.putShift(rowid, shiftData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.data.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteRow(rowid, commit) {
    console.log("u are about deleting a row...");

    this.loadingSpinner.httpLoader.open();

    this.rosterApi.deleteShift(rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
