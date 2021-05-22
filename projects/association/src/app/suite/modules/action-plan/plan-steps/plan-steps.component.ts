import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ActionPlanApiService } from '../action-plan-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-plan-steps',
  templateUrl: './plan-steps.component.html',
  styleUrls: ['./plan-steps.component.css']
})
export class PlanStepsComponent implements OnInit, AfterViewInit {

  constructor(
    private plansApi: ActionPlanApiService,
  ) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("addbuttonReference") addButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    // this.plansApi.getSteps()
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.source.localdata = res;
    //       this.grid.updatebounddata();
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  onAddCommit(stepData: any) {
    this.grid.addrow(null, stepData);
  }

  onEditCommit(stepData: any) {
    this.grid.updaterow(stepData.id, stepData);
  }

  onDeleteCommit(stepId: number) {
    this.grid.deleterow(stepId);
  }

  // widgets
  // -------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'step', type: 'date' },
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
    { text: "Step", dataField: "step", width: "100%" },
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    // negate amount if trnsaction type is Debit
    // let formattedData = this.plansCalc.reformatData(rowdata);

    // let stepData = {
    //   plan: sessionStorage.getItem('plan_id'),
    //   step: formattedData.step,
    // };

    this.loadingSpinner.httpLoader.open();

    // this.plansApi.postStep(stepData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();
    //       commit(true, res.id);
    //     },
    //     err => {
    //       console.log(err);
    //       this.loadingSpinner.httpLoader.close();
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  updateRow(rowid, newdata, commit) {
    console.log("u are about updating a row...");
    console.log(newdata);

    // negate amount if trnsaction type is Debit
    // let formattedData = this.plansCalc.reformatData(newdata);

    // let stepData = {
    //   plan: sessionStorage.getItem('plan_id'),
    //   step: formattedData.step,
    // };

    this.loadingSpinner.httpLoader.open();

    // this.plansApi.putStep(rowid, stepData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();
    //       commit(true, res.data.id);
    //     },
    //     err => {
    //       console.log(err);
    //       this.loadingSpinner.httpLoader.close();
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  deleteRow(rowid, commit) {
    console.log("u are about deleting a row...");

    this.loadingSpinner.httpLoader.open();

    // this.plansApi.deleteStep(rowid)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.loadingSpinner.httpLoader.close();
    //       commit(true);
    //     },
    //     err => {
    //       console.log(err);
    //       this.loadingSpinner.httpLoader.close();
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

}
