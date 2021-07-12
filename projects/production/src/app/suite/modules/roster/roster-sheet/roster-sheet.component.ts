import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { RosterApiService } from '../roster-api.service';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-roster-sheet',
  templateUrl: './roster-sheet.component.html',
  styleUrls: ['./roster-sheet.component.css']
})
export class RosterSheetComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  sheetLocalData: any = [];
  sheetDataFields: any = [];
  sheetColumns: any[] = [];
  sheetEditDropDownSource: any[] = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshSheet();
    this.getBatches();
  }

  refreshSheet(){
    this.rosterApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getRosterDays();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // for source of sheet custom cell edit widget
  getBatches(){
    this.rosterApi.getBatches()
      .subscribe(
        res => {
          console.log(res);

          this.sheetEditDropDownSource = [];
          res.forEach(batch => {
            this.sheetEditDropDownSource.push(batch.batch_symbol);
          });
          console.log(this.sheetEditDropDownSource);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // for populating columns
  getRosterDays(){
    this.rosterApi.getRosterDays()
      .subscribe(
        res => {
          console.log(res);
          this.setRosterColumns(res);

          this.grid.showloadelement();
          this.getSheetShifts();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getSheetShifts(){
    this.rosterApi.getShifts()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheetShifts(res);
          this.getSheetBatches();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getSheetBatches(){
    this.rosterApi.getRosterSheet()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheetBatches(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // ---------------------------------------------------------------------------------------------------------------------------

  setRosterColumns(shiftDays){
    // set datafields
    this.sheetDataFields = [];
    this.sheetDataFields.push({ name: 'id', type: 'string' });
    this.sheetDataFields.push({ name: 'shift_id', type: 'string' });
    this.sheetDataFields.push({ name: 'shift_name', type: 'string' });

    // set columns
    this.sheetColumns = [];
    this.sheetColumns.push({ text: "Shift Name", dataField: "shift_name", pinned: "true", editable: "false", width: "18%", minwidth: 150 });

    shiftDays.forEach(day => {
      // datafields
      this.sheetDataFields.push({ name: day.id, type: 'string' });

      // columns
      var dayColumn = { text: day.day, dataField: day.id, editable: "true", width: 100,
        // columntype: 'dropdownlist',
        // createeditor: function (row, value, editor) {
        //   editor.jqxDropDownList({ source: this.sheetEditDropDownSource, width: 100 });
        // }
      };
      this.sheetColumns.push(dayColumn);
    });
  }

  populateSheetShifts(shiftData){
    shiftData.forEach(shift => {
      let data = { id: shift.id, shift_id: shift.id, shift_name: shift.shift_name };
      this.sheetLocalData.push(data);
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

  // TODO:
  populateSheetBatches(sheetData){
    let rows = this.grid.getrows();
    console.log(rows);

    sheetData.forEach(sheet => {

    });

    // console.log(this.sheetLocalData);
    // this.source.localdata = this.sheetLocalData;
    // this.grid.updatebounddata();
  }

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: this.sheetDataFields,
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  // TODO:
  postSheetData(){
    var data = [];
    var rows = this.grid.getrows();

    rows.forEach(batch => {

    });

    this.rosterApi.postRosterSheet(data)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(data);
  }

}
