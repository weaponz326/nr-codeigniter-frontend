import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

import { CashflowApiService } from '../../cashflow-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-add-outflow-item',
  templateUrl: './add-outflow-item.component.html',
  styleUrls: ['./add-outflow-item.component.css']
})
export class AddOutflowItemComponent implements OnInit {

  constructor(
    private cashflowApi: CashflowApiService,
  ) { }

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  @ViewChild("addOutflowReference") addOutflow: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("outflowReference")outflow: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.addOutflow.open();
  }

  closeWindow(){
    this.addOutflow.close();
  }

  saveOutflow(){
    let itemData = { outflow: this.outflow.val() }
    this.addCommit.emit(itemData);
    console.log(itemData);

    this.closeWindow();
  }

}
