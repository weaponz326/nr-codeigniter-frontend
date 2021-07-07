import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { TimetablesApiService } from '../timetables-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-edit-timetable',
  templateUrl: './edit-timetable.component.html',
  styleUrls: ['./edit-timetable.component.css']
})
export class EditTimetableComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private timetablesApi: TimetablesApiService,
  ) { }

  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  sheetLocalData: any = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.refreshSheet();
  }

  refreshSheet(){
    this.timetablesApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getData(){
    this.timetablesApi.getFullSheet()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheet(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  populateSheet(sheetData){
    sheetData.forEach(sheet => {
      // timetable class id is not id of class but id of the timetable class instance
      let data = { id: sheet.id, timetable_class_id:sheet.timetable_class.id,  class_name: sheet.timetable_class.clas.class_name, period: sheet.timetable_period.period };
      this.sheetLocalData.push(data);

      console.log(this.sheetLocalData);
      this.source.localdata = this.sheetLocalData;
      this.grid.updatebounddata();
    });
  }

  editSheet(e: any){
    console.log(e);
    if(e.type == "cellclick"){
      if(!(e.args.dataField != "class_name" || e.args.dataField != "period")){
        // TODO: edit cell with subject
        // open select subject window and filter subjects by class
        
        var column = e.args.datafield;
        var row = e.args.row.bounddata.id;
      }
    }
  }

  gotoClassTimetable(e: any){
    console.log(e);
    if(e.type == "celldoubleclick"){
      console.log("u double click");
      if(e.args.datafield == "class_name"){
        console.log("u double click on class");
        sessionStorage.setItem('timetable_class_id', e.args.row.bounddata.timetable_class_id)
        this.router.navigateByUrl("/suite/timetables/class-timetable")
      }
    }
  }

  // ----------------------------------------------------------------------------------------------------------
  // main timetable grid

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'timetable_class_id', type: 'string' },
      { name: 'class_name', type: 'string' },
      { name: 'period', type: 'string' },
      { name: 'monday', type: 'string' },
      { name: 'tuesday', type: 'string' },
      { name: 'wednesday', type: 'string' },
      { name: 'thursday', type: 'string' },
      { name: 'friday', type: 'string' },
    ],
    id: 'id',
  }

  timetableDataAdapter: any = new jqx.dataAdapter(this.source);

  timetableColumns: any[] = [
    { text: "Class", columngroup: 'classGroup', dataField: "class_name", editable: false, align: "center", width: "15%" },
    { text: "Period", columngroup: 'classGroup', dataField: "period", editable: false, align: "center", width: "10%" },
    { text: "Monday", dataField: "monday", align: "center", width: "15%" },
    { text: "Tuesday", dataField: "tuesday", align: "center", width: "15%" },
    { text: "Wednesday", dataField: "wednesday", align: "center", width: "15%" },
    { text: "Thursday", dataField: "thursday", align: "center", width: "15%" },
    { text: "Friday", dataField: "friday", align: "center", width: "15%" },
  ];

  classColumnGroups: any[] = [
    { text: "", align: "center", name: "classGroup" }
  ];

}
