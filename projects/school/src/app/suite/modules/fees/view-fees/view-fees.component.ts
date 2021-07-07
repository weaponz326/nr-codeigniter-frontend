import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { FeesApiService } from '../fees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-view-fees',
  templateUrl: './view-fees.component.html',
  styleUrls: ['./view-fees.component.css']
})
export class ViewFeesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private feesApi: FeesApiService,
  ) { }

  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("feesCodeReference") feesCode: jqxInputComponent;
  @ViewChild("feesDescriptionReference") feesDescription: jqxInputComponent;
  @ViewChild("feesDateReference") feesDate: jqxDateTimeInputComponent;
  @ViewChild("gridReference") grid: jqxGridComponent;
  
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Fees", url: "/suite/fees/all-fees" },
    { text: "View Fees", url: "/suite/fees/view-fees" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.feesApi.getSingleFees()
      .subscribe(
        res => {
          console.log(res);
          this.feesCode.val(res.fees_code);
          this.feesDescription.val(res.fees_description);
          this.feesDate.val(res.fees_date);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    this.getTargetClasses();
  }

  generateBill(){
    this.feesApi.generateBill()
      .subscribe(
        res => {
          console.log(res);
          this.router.navigateByUrl('/suite/fees/all-bills');
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveFees(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a fees");

    var feesData = {
      account: sessionStorage.getItem('school_id'),
      fees_code: this.feesCode.val(),
      fees_description: this.feesDescription.val(),
      fees_date: this.feesDate.val(),
    }

    this.feesApi.putFees(feesData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(feesData);
  }

  deleteFees(){
    console.log("dude... u are gonna delete the fees?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.feesApi.deleteFees()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/fees/all-fees');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  // ----------------------------------------------------------------------------------------------
  // classes grid

  getTargetClasses(){
    this.feesApi.getTargetClasses()
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

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'class_id', map: 'clas>id', type: 'string' },
      { name: 'class_name', map: 'clas>class_name', type: 'string' },
      { name: 'department', map: 'clas>department', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addRow(rowid, rowdata, position, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteRow(rowid, commit);
    }
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Class Name", dataField: "class_name", width: "60%" },
    { text: "Department", dataField: "department", width: "40%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let itemData =  {
      fee: sessionStorage.getItem('fees_id'),
      clas: rowdata.class_id,
    }

    console.log(itemData);

    this.loadingSpinner.httpLoader.open();

    this.feesApi.postTargetClass(itemData)
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

  deleteRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    this.feesApi.deleteTargetClass(rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // onItemAddCommit(feeData: any) {
  //   this.grid.addrow(null, feeData);
  // }

  onItemDeleteCommit(feeId: number) {
    this.grid.deleterow(feeId);
  }

  classSelected(clas: any){
    console.log(clas);

    let classData = {
      class_id: clas.id,
      class_name: clas.class_name,
      department: clas.department,
    }

    this.grid.addrow(null, classData);
  }

}
