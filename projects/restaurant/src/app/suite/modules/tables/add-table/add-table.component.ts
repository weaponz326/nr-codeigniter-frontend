import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TablesApiService } from '../tables-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { TableFormComponent } from '../table-form/table-form.component';


@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {

  constructor(
    private router: Router,
    private tablesApi: TablesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('tableFormComponentReference') tableForm: TableFormComponent;

  navHeading: any[] = [
    { text: "Add Table", url: "/suite/tables/add-table" },
  ];

  ngOnInit(): void {
  }

  saveTable(){
    console.log('u are saving a new table');
    this.loadingSpinner.httpLoader.open();

    var tableData = {
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      table_number: this.tableForm.tableNumber.val(),
      table_type: this.tableForm.tableType.val(),
      capacity: this.tableForm.capacity.val(),
      location: this.tableForm.location.val(),
      table_status: this.tableForm.tableStatus.val(),
    }

    console.log(tableData);

    this.tablesApi.postTable(tableData)
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
  }

}
