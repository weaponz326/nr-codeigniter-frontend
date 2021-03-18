import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ParentsApiService } from '../parents-api.service';
import { SelectWardComponent } from '../select-ward/select-ward.component'
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-parent-wards',
  templateUrl: './parent-wards.component.html',
  styleUrls: ['./parent-wards.component.css']
})
export class ParentWardsComponent implements OnInit, AfterViewInit {

  constructor(private parentsApi: ParentsApiService) { }

  @ViewChild('addWardButtonReference') addWardButon: jqxButtonComponent;
  @ViewChild('wardsGridReference') wardsGrid: jqxGridComponent;

  @ViewChild("selectWardComponentReference") selectWard: SelectWardComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.wardsGrid.showloadelement();
    this.getData();
  }

  getData(){
    this.parentsApi.getWards()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.wardsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  wardSelected(ward: any){
    console.log(ward);

    // insert ward into grid
    let wardData = {
      student_id: ward.id,
      student_code: ward.student_code,
      student_name: ward.student_name,
      class: ward.class_name,
    }

    this.wardsGrid.addrow(null, wardData);
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'student_id', map: 'ward>id', type: 'string' },
      { name: 'student_code', map: 'ward>student_code', type: 'string' },
      { name: 'student_name', map: 'ward>student_name', type: 'string' },
      { name: 'class_name', map: 'ward>clas>class_name', type: 'string' }
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addWardRow(rowid, rowdata, position, commit);
    },

    deleterow: (rowid, commit) => {
      this.deleteWardRow(rowid, commit);
    }
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", width: "20%" },
    { text: "Ward Name", dataField: "student_name", width: "45%" },
    { text: "Class_name", dataField: "class_name", width: "35%" }
  ];

  // crud

  addWardRow(rowid, rowdata, position, commit) {
    let wardData = {
      parent: sessionStorage.getItem('parent_id'),
      ward: rowdata.student_id,
    }

    console.log(wardData);
    console.log(rowdata);
    this.loadingSpinner.httpLoader.open();

    this.parentsApi.postWard(wardData)
      .subscribe(
        res => {
          console.log(res);
          commit(true, res.id);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteWardRow(rowid, commit) {
    this.loadingSpinner.httpLoader.open();

    this.parentsApi.deleteWard(rowid)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
