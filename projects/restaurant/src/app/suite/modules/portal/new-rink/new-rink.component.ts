import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

import { PortalApiService } from '../portal-api.service';

import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.css']
})
export class NewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('nameInputReference') nameInput: jqxInputComponent;
  @ViewChild('locationInputReference') locationInput: jqxInputComponent;
  @ViewChild('typeDropDownListReference') typeDropDownList: jqxDropDownListComponent;
  @ViewChild('sourceInputReference') sourceInput: jqxInputComponent;
  @ViewChild('sourceButtonReference') sourceButton: jqxButtonComponent;
  @ViewChild('commentTextAreaReference') commentTextArea: jqxTextAreaComponent;
  @ViewChild('sendButtonReference') sendButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/suite/portal/search" },
    { text: "Send Rink", url: "/suite/portal/search/new-rink" },
  ];

  selectedSourceId: any;
  selectedSource: string;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.portalApi.getDetail(sessionStorage.getItem('searchUser'))
      .subscribe(
        res => {
          console.log(res);
          this.nameInput.val(res.name);
          this.locationInput.val(res.location);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // enable source button when user select type
  enableSourceButton(){
    this.sourceButton.disabled(false);
  }

  openSourceWindow(){
    let type = this.typeDropDownList.val();

    // TODO: select module window to open
  }

  onSourceSelected(sourceData: any){
    console.log(sourceData);
    let type = this.typeDropDownList.val();

    // TODO: set source according to selected module

    this.sourceInput.val(this.selectedSource);
  }

  sendRink(){
    let rinkData = {
      sender: sessionStorage.getItem('resturant_id'),
      recipient: sessionStorage.getItem('rink_recipient'),
      rink_type: this.typeDropDownList.val(),
      rink_source: this.selectedSourceId,
      comment: this.commentTextArea.val()
    }

    console.log(rinkData);

    this.loadingSpinner.httpLoader.open();

    this.portalApi.postRink(rinkData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('rink_id', res.id);
            this.router.navigateByUrl('/suite/portal/view-rink');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  typeSource: string[] = ['Staff', 'Order', 'Delivery', 'Customer', 'Menu'];

}
