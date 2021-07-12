import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { CashflowApiService } from '../../cashflow-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-add-inflow-item',
  templateUrl: './add-inflow-item.component.html',
  styleUrls: ['./add-inflow-item.component.css']
})
export class AddInflowItemComponent implements OnInit {

  constructor(
    private cashflowApi: CashflowApiService,
  ) { }

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  @ViewChild("addInflowReference") addInflow: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("inflowReference")inflow: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.addInflow.open();
  }

  closeWindow(){
    this.addInflow.close();
  }

  saveInflow(){
    let itemData = { inflow: this.inflow.val() }
    this.addCommit.emit(itemData);
    console.log(itemData);

    this.closeWindow();
  }

}
