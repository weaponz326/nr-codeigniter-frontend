import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { CashflowApiService } from '../cashflow-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-view-sheet',
  templateUrl: './view-sheet.component.html',
  styleUrls: ['./view-sheet.component.css']
})
export class ViewSheetComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private cashflowApi: CashflowApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild("sheetCodeReference")sheetCode: jqxInputComponent;
  @ViewChild("sheetNameReference")sheetName: jqxInputComponent;
  @ViewChild("sheetTypeReference")sheetType: jqxDropDownListComponent;

  navHeading: any[] = [
    { text: "All Sheets", url: "/suite/cashflow/all-sheets" },
    { text: "View Sheet", url: "/suite/cashflow/view-sheet" },
  ];

  // sheet type source for dropdownlist
  typeSource: any[] = ["Weekly", "Monthly", "Quarterly"];

  // show sheet according to sheet type
  showSheet: string = "weekly";

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cashflowApi.getSingleSheet()
      .subscribe(
        res => {
          console.log(res);
          this.sheetCode.val(res.sheet_code);
          this.sheetName.val(res.sheet_name);
          this.sheetType.val(res.sheet_type);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveSheet(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a sheet");

    var sheetData = {
      account: sessionStorage.getItem('shop_id'),
      sheet_code: this.sheetCode.val(),
      sheet_name: this.sheetName.val(),
      sheet_type: this.sheetType.val(),
    }

    this.cashflowApi.putSheet(sheetData)
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

    console.log(sheetData);
  }

  deleteSheet(){
    console.log("dude... u are gonna delete the sheet?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.cashflowApi.deleteSheet()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/sheet/all-sheet');
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
