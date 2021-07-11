import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { RosterApiService } from '../roster-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { AddBatchComponent } from '../add-batch/add-batch.component'
import { EditBatchComponent } from '../edit-batch/edit-batch.component'


@Component({
  selector: 'app-manage-batches',
  templateUrl: './manage-batches.component.html',
  styleUrls: ['./manage-batches.component.css']
})
export class ManageBatchesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService,
  ) { }

  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild('rosterCodeReference') rosterCode: jqxInputComponent;
  @ViewChild('rosterNameReference') rosterName: jqxInputComponent;
  @ViewChild('sourceReference') rosterSource: jqxDropDownListComponent;

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("addBatchButtonReference") addBatchButton: jqxButtonComponent;

  @ViewChild('addBatchComponentReference') addBatch: AddBatchComponent;
  @ViewChild('editBatchComponentReference') editBatch: EditBatchComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Rosters", url: "/suite/roster/all-rosters" },
    { text: "View Roster", url: "/suite/roster/view-roster" },
    { text: "Manage Batches", url: "/suite/roster/manage-batches" },
  ];

  sourceSource = ['Nurses', 'Doctors', 'Staff'];
  personnelDisplay;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.rosterApi.getSingleRoster()
      .subscribe(
        res => {
          console.log(res);
          this.rosterCode.val(res.roster_code);
          this.rosterName.val(res.roster_name);
          this.rosterSource.val(res.source);

          this.personnelDisplay = res.source;
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.rosterApi.getBatches()
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

  onAddCommit(batchData: any) {
    this.grid.addrow(null, batchData);
  }

  onEditCommit(batchData: any) {
    this.grid.updaterow(batchData.id, batchData);
  }

  onDeleteCommit(batchId: number) {
    this.grid.deleterow(batchId);
  }

  // batch widgets
  // --------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'batch_name', type: 'string' },
      { name: 'batch_symbol', type: 'string' },
      { name: 'batch_status', type: 'string' },
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
    { text: 'Batch Name', dataField: 'batch_name', width: "70%" },
    { text: 'Batch Symbol', dataField: 'batch_symbol', width: "30%" },
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let batchData = {
      roster: sessionStorage.getItem('roster_id'),
      batch_name: rowdata.batch_name,
      batch_symbol: rowdata.batch_symbol,
    }

    console.log(batchData);

    this.loadingSpinner.httpLoader.open();

    this.rosterApi.postBatch(batchData)
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

    let batchData = {
      roster: sessionStorage.getItem('roster_id'),
      batch_name: newdata.batch_name,
      batch_symbol: newdata.batch_symbol,
    }

    this.loadingSpinner.httpLoader.open();

    this.rosterApi.putBatch(rowid, batchData)
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

    this.rosterApi.deleteBatch(rowid)
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
