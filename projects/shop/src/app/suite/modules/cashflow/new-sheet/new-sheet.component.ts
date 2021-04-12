import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { CashflowApiService } from '../cashflow-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-sheet',
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.css']
})
export class NewSheetComponent implements OnInit {

  constructor(
    private router: Router,
    private cashflowApi: CashflowApiService,
  ) { }


  @ViewChild("newSheetReference") newSheet: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("sheetCodeReference")sheetCode: jqxInputComponent;
  @ViewChild("sheetNameReference")sheetName: jqxInputComponent;
  @ViewChild("sheetTypeReference")sheetType: jqxDropDownListComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  // sheet type source for dropdownlist
  typeSource: any[] = ["Weekly", "Monthly", "Quarterly"];

  ngOnInit(): void {
  }

  openWindow(){
    this.newSheet.open();
  }

  saveSheet(){
    this.loadingSpinner.httpLoader.open();

    let sheetData = {
      shop_id: localStorage.getItem('shop_id'),
      sheet_code: this.sheetCode.val(),
      sheet_name: this.sheetName.val(),
      sheet_type: this.sheetType.val(),
    }

    this.cashflowApi.postSheet(sheetData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('lab_id', res.lab_id);
            this.router.navigateByUrl('/suite/cashflow/view-sheet');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(sheetData);
  }

}
