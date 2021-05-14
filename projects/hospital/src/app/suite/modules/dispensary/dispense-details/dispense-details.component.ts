import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DispensaryApiService } from '../dispensary-api.service';
import { AddDetailComponent } from '../add-detail/add-detail.component'
import { EditDetailComponent } from '../edit-detail/edit-detail.component'

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-dispense-details',
  templateUrl: './dispense-details.component.html',
  styleUrls: ['./dispense-details.component.css']
})
export class DispenseDetailsComponent implements OnInit, AfterViewInit {

  constructor(private dispensaryApi: DispensaryApiService) { }

  @ViewChild("dispenseGridReference") dispsenseGrid: jqxGridComponent;
  @ViewChild("prescriptionsGridReference") prescriptionsGrid: jqxGridComponent;
  @ViewChild("buttonReference") button: jqxButtonComponent;

  @ViewChild('addDetailComponentReference') addDetail: AddDetailComponent;
  @ViewChild('editDetailComponentReference') editDetail: EditDetailComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  prescriptionId;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dispsenseGrid.showloadelement();
    this.getDispenseData();
  }

  getDispenseData(){
    this.dispensaryApi.getDetails()
      .subscribe(
        res => {
          console.log(res);
          this.dispenseSource.localdata = res;
          this.dispsenseGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // called from parent view dispense after prescription info has loaded
  getPrescriptionData(prescriptionId){
    console.log(prescriptionId);
    this.dispensaryApi.getPrescriptionDrugs(prescriptionId)
      .subscribe(
        res => {
          console.log(res);
          this.prescriptionsSource.localdata = res;
          this.prescriptionsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  onAddCommit(detailData: any) {
    this.dispsenseGrid.addrow(null, detailData);
  }

  onEditCommit(detailData: any) {
    this.dispsenseGrid.updaterow(detailData.id, detailData);
  }

  onDeleteCommit(detailId: number) {
    this.dispsenseGrid.deleterow(detailId);
  }

// widgets
  // --------------------------------------------------------------------------------------------

  // prescriptions grid

  prescriptionsSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'medicine', type: 'string' },
      { name: 'dosage', type: 'string' },
    ],
    id: 'id',
  }

  prescriptionsDataAdapter: any = new jqx.dataAdapter(this.prescriptionsSource);

  prescriptionsColumns: any[] = [
    { text: 'Medicine', dataField: 'medicine', width: "60%" },
    { text: 'Dosage.', dataField: 'dosage', width: "40%" },
  ];

  // ------------------------------------------------------------------------------------------------

  // dispense grid

  dispenseSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'drug_id', map: 'drug>id', type: 'string' },
      { name: 'drug_name', map: 'drug>drug_name', type: 'string' },
      { name: 'ndc_number', map: 'drug>ndc_number', type: 'string' },
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

  dispenseDataAdapter: any = new jqx.dataAdapter(this.dispenseSource);

  dispenseColumns: any[] = [
    { text: 'Drug Name', dataField: 'drug_name', width: "40%" },
    { text: 'NDC No.', dataField: 'ndc_number', width: "20%" },
    { text: 'Remarks', dataField: 'remarks', width: "40%" },
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let detailData = {
      dispensary: sessionStorage.getItem('dispensary_id'),
      drug: rowdata.drug_id,
      drug_name: rowdata.drug_name,
      ndc_number: rowdata.ndc_number,
      remarks: rowdata.remarks
    }

    console.log(detailData);

    this.loadingSpinner.httpLoader.open();

    this.dispensaryApi.postDetail(detailData)
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
      dispensary: sessionStorage.getItem('dispensary_id'),
      drug: newdata.drug_id,
      drug_name: newdata.drug_name,
      ndc_number: newdata.ndc_number,
      remarks: newdata.remarks
    }

    this.loadingSpinner.httpLoader.open();

    this.dispensaryApi.putDetail(rowid, detailData)
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

    this.dispensaryApi.deleteDetail(rowid)
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
