import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ServicesApiService } from '../services-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private servicesApi: ServicesApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild("gridReference") grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  @Output() totalCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.servicesApi.getServiceItems()
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

  // widgets
  // -----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'item_date', type: 'string' },
      { name: 'description', type: 'string' },
      { name: 'amount', type: 'string' },
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
    { text: "Item Date", dataField: "item_date", width: "25%" },
    { text: "Item Description", dataField: "description", width: "55%" },
    { text: "Amount", dataField: "amount", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let serviceData =  {
      service: sessionStorage.getItem('service_id'),
      item_date: rowdata.item_date,
      description: rowdata.description,
      amount: rowdata.amount,
    }

    console.log(serviceData);

    this.loadingSpinner.httpLoader.open();

    this.servicesApi.postServiceItem(serviceData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.data.id);

          this.updateTotal(this.grid.getcolumnaggregateddata('amount', ['sum'])['sum']);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  updateRow(rowid, newdata, commit){
    console.log("u are about updating a new row...");
    console.log(newdata);

    let serviceData =  {
      service: sessionStorage.getItem('service_id'),
      item_date: newdata.item_date,
      description: newdata.description,
      amount: newdata.amount,
    }

    console.log(serviceData);

    this.loadingSpinner.httpLoader.open();

    this.servicesApi.putServiceItem(serviceData, rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.data.id);

          this.updateTotal(this.grid.getcolumnaggregateddata('amount', ['sum'])['sum']);
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

    this.servicesApi.deleteServiceItem(rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);

          this.updateTotal(this.grid.getcolumnaggregateddata('amount', ['sum'])['sum']);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  updateTotal(total) {
    console.log(total);
    this.loadingSpinner.httpLoader.open();

    let totalData = { total_amount: total }

    this.servicesApi.patchTotal(totalData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          this.totalCommit.emit(total);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  onAddCommit(serviceData: any) {
    this.grid.addrow(null, serviceData);
  }

  onEditCommit(serviceData: any) {
    this.grid.updaterow(serviceData.id, serviceData);
  }

  onDeleteCommit(serviceId: number) {
    this.grid.deleterow(serviceId);
  }

}
