import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { RosterApiService } from '../../roster-api.service';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-doctors-sheet',
  templateUrl: './doctors-sheet.component.html',
  styleUrls: ['./doctors-sheet.component.css']
})
export class DoctorsSheetComponent implements OnInit {

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
  }

  refreshSheet(){
    this.rosterApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getBatches();
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
          this.getSheetData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getSheetData(){
    this.rosterApi.getRosterSheet()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheetData(res);
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

  populateSheetData(sheetData){
    sheetData.forEach(sheet => {
      let data = { shift_id: sheet.shift.id, shift_name: sheet.shift.shift_name };

      var sheetBatches = Object.entries(sheet.batches);
      sheetBatches.forEach(batch => {
        data[batch[0]] = batch[1];
      });

      this.sheetLocalData.push(data);
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: this.sheetDataFields,
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  postSheetData(){
    var data = [];
    var rows = this.grid.getrows();

    rows.forEach(batch => {
      var newBatch = {};
      newBatch["roster"] = sessionStorage.getItem("roster_id");
      newBatch["shift"] = batch.shift_id;
      newBatch["batches"] = {};

      this.sheetColumns.forEach(column => {
        if(column.dataField in batch && column.dataField != "shift_id" && column.dataField != "shift_id"){
          var dayId = column.dataField;
          newBatch["batches"][dayId] = batch[dayId];
        }
      });

      data.push(newBatch);
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
