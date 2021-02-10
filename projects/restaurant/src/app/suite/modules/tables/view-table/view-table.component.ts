import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TablesApiService } from '../tables-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { TableFormComponent } from '../table-form/table-form.component';


@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('tableFormComponentReference') tableForm: TableFormComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.tablesApi.getSingleTable()
      .subscribe(
        res => {
          console.log(res);
          this.tableForm.tableNumber.val(res.table_number);
          this.tableForm.tableType.val(res.table_type);
          this.tableForm.capacity.val(res.capacity);
          this.tableForm.location.val(res.location);
          this.tableForm.tableStatus.val(res.table_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveTable(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a table");

    var tableData = {
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      table_number: this.tableForm.tableNumber.val(),
      table_type: this.tableForm.tableType.val(),
      capacity: this.tableForm.capacity.val(),
      location: this.tableForm.location.val(),
      table_status: this.tableForm.tableStatus.val(),
    }

    this.tablesApi.putTable(tableData)
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

    console.log(tableData);
  }

  deleteTable(){
    console.log("dude... u are gonna delete the table?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.tablesApi.deleteTable()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/tables/all-tables');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
