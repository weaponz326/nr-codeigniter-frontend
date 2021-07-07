import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { TimetablesApiService } from '../timetables-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-full-timetable',
  templateUrl: './full-timetable.component.html',
  styleUrls: ['./full-timetable.component.css']
})
export class FullTimetableComponent implements OnInit {

  constructor(
    private router: Router,
    private timetablesApi: TimetablesApiService,
  ) { }

  @ViewChild('timetableCodeReference') timetableCode: jqxInputComponent;
  @ViewChild('timetableNameReference') timetableName: jqxInputComponent;
  @ViewChild('timetableDateReference') timetableDate: jqxDateTimeInputComponent;
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('saveTimetableReference') saveButton: jqxButtonComponent;

  @ViewChild('addClassReference') addClassutton: jqxButtonComponent;
  @ViewChild('classesGridReference') classesGrid: jqxGridComponent;
  @ViewChild('addPeriodReference') addPeriodutton: jqxButtonComponent;
  @ViewChild('periodsGridReference') periodsGrid: jqxGridComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Timetables", url: "/suite/timetables/all-timetables" },
    { text: "Full Timetable", url: "/suite/timetables/full-timetable" },
  ];

  termIdStore;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {    
    this.getTimetable();
    
    this.classesGrid.showloadelement();
    this.getClassesData();
    this.periodsGrid.showloadelement();
    this.getPeriodsData();
  }

  getTimetable(){
    this.timetablesApi.getSingleTimetable()
      .subscribe(
        res => {
          console.log(res);
          this.timetableCode.val(res.timetable_code);
          this.timetableName.val(res.timetable_name);
          this.term.val(res.term);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // ----------------------------------------------------------------------------------------------------------
  // full timetable

  saveTimetable(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a timetable");

    var timetableData = {
      account: sessionStorage.getItem('school_id'),
      timetable_code: this.timetableCode.val(),
      timetable_name: this.timetableName.val(),
      term: this.termIdStore,
    }

    this.timetablesApi.putTimetable(timetableData)
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

    console.log(timetableData);
  }

  deleteTimetable(){
    console.log("dude... u are gonna delete the timetable?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.timetablesApi.deleteTimetable()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/timetables/all-timetables');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  // ---------------------------------------------------------------------------------------------------------------
  // timetable config
  
  getClassesData(){
    this.timetablesApi.getTimetableClasses()
      .subscribe(
        res => {
          console.log(res);
          this.classesSource.localdata = res;
          this.classesGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getPeriodsData(){
    this.timetablesApi.getTimetablePeriods()
      .subscribe(
        res => {
          console.log(res);
          this.periodsSource.localdata = res;
          this.periodsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  classSelected(clas: any){
    console.log(clas);

    let classData = {
      class_id: clas.id,
      class_name: clas.class_name,
      department: clas.department,
    }
    this.classesGrid.addrow(null, classData);
  }

  periodAdded(period: any){
    this.periodsGrid.addrow(null, period);
  }

  classesSource: any = {
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
      this.addClassRow(rowid, rowdata, position, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteClassRow(rowid, commit);
    }
  }

  classesDataAdapter: any = new jqx.dataAdapter(this.classesSource);

  classesColumns: any[] = [
    { text: "Class Name", dataField: "class_name", width: "60%" },
    { text: "Department", dataField: "department", width: "40%" },
  ];

  addClassRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let classData =  {
      timetable: sessionStorage.getItem('timetable_id'),
      clas: rowdata.class_id,
    }

    console.log(classData);

    this.loadingSpinner.httpLoader.open();

    this.timetablesApi.postTimetableClass(classData)
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

  deleteClassRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    // this.timetablesApi.deleteTimetableClass(rowid)
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

  // periods grid

  periodsSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'period', type: 'string' },
      { name: 'period_start', type: 'string' },
      { name: 'period_end', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addPeriodRow(rowid, rowdata, position, commit);
    },
    deleterow: (rowid, commit) => {
      this.deletePeriodRow(rowid, commit);
    }
  }

  periodsDataAdapter: any = new jqx.dataAdapter(this.periodsSource);

  periodsColumns: any[] = [
    { text: "Period", dataField: "period", width: "50%" },
    { text: "Period Start", dataField: "period_start", width: "25%" },
    { text: "Period End", dataField: "period_end", width: "25%" },
  ];

  addPeriodRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let periodData =  {
      timetable: sessionStorage.getItem('timetable_id'),
      period: rowdata.period,
      period_start: rowdata.period_start,
      period_end: rowdata.period_end,
    }

    console.log(periodData);

    this.loadingSpinner.httpLoader.open();

    this.timetablesApi.postTimetablePeriod(periodData)
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

  deletePeriodRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    // this.timetablesApi.deleteTimetablePeriod(rowid)
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

}
