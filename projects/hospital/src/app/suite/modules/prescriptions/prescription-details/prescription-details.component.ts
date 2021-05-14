import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PrescriptionsApiService } from '../prescriptions-api.service';
import { AddDetailComponent } from '../add-detail/add-detail.component'
import { EditDetailComponent } from '../edit-detail/edit-detail.component'

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit, AfterViewInit {

  constructor(private prescriptionsApi: PrescriptionsApiService) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("buttonReference") button: jqxButtonComponent;

  @ViewChild('addDetailComponentReference') addDetail: AddDetailComponent;
  @ViewChild('editDetailComponentReference') editDetail: EditDetailComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.prescriptionsApi.getDetails()
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

  onAddCommit(detailData: any) {
    this.grid.addrow(null, detailData);
  }

  onEditCommit(detailData: any) {
    this.grid.updaterow(detailData.id, detailData);
  }

  onDeleteCommit(detailId: number) {
    this.grid.deleterow(detailId);
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'medicine', type: 'string' },
      { name: 'dosage', type: 'string' },
      { name: 'remarks', type: 'string' },
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
    { text: 'Medicine Name', dataField: 'medicine', width: "34%", autoRowHeight: true },
    { text: 'Dosage', dataField: 'dosage', width: "33%", autoRowHeight: true },
    { text: 'Remarks', dataField: 'remarks', width: "33%", autoRowHeight: true },
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let detailData = {
      prescription: sessionStorage.getItem('prescription_id'),
      medicine: rowdata.medicine,
      dosage: rowdata.dosage,
      remarks: rowdata.remarks
    }

    console.log(detailData);

    this.loadingSpinner.httpLoader.open();

    this.prescriptionsApi.postDetail(detailData)
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

    let detailData = {
      prescription: sessionStorage.getItem('prescription_id'),
      medicine: newdata.medicine,
      dosage: newdata.dosage,
      remarks: newdata.remarks
    }

    this.loadingSpinner.httpLoader.open();

    this.prescriptionsApi.putDetail(rowid, detailData)
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

    this.prescriptionsApi.deleteDetail(rowid)
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
