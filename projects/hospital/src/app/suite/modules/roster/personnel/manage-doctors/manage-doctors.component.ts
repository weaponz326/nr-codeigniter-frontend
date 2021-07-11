import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { RosterApiService } from '../../roster-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { EditDoctorComponent } from '../edit-doctor/edit-doctor.component'


@Component({
  selector: 'app-manage-doctors',
  templateUrl: './manage-doctors.component.html',
  styleUrls: ['./manage-doctors.component.css']
})
export class ManageDoctorsComponent implements OnInit {

  constructor(
    private router: Router,
    private rosterApi: RosterApiService,
  ) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild('editDoctorComponentReference') editDoctor: EditDoctorComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshPersonnel();
  }

  refreshPersonnel(){
    this.rosterApi.refreshPersonnel()
      .subscribe(
        res => {
          console.log(res);
          this.getPersonnelData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getPersonnelData(){
    this.rosterApi.getPersonnel()
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

  onEditCommit(personnelData: any) {
    this.grid.updaterow(personnelData.id, personnelData);
  }

  // personnel widgets
  // --------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'doctor_id', map: 'doctor>id', type: 'string' },
      { name: 'doctor_code', map: 'doctor>doctor_code', type: 'string' },
      { name: 'doctor_name', map: 'doctor>doctor_name', type: 'string' },
      { name: 'batch_name', type: 'string' },
      { name: 'batch_symbol', type: 'string' },
    ],
    id: 'id',
    updaterow: (rowid, newdata, commit) => {
      this.updateRow(rowid, newdata, commit);
    },
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: 'Staff ID', dataField: 'doctor_code', width: "30%" },
    { text: 'Staff Name', dataField: 'doctor_name', width: "50%" },
    { text: 'Batch', dataField: 'batch_symbol', width: "20%" },
  ];

  updateRow(rowid, newdata, commit) {
    console.log("u are about updating a row...");
    console.log(newdata);

    let personnelData = {
      roster: sessionStorage.getItem('roster_id'),
      doctor_id: newdata.doctor_id,
      batch_symbol: newdata.batch_symbol,
    }

    this.loadingSpinner.httpLoader.open();

    this.rosterApi.putPersonnel(rowid, personnelData)
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

}
