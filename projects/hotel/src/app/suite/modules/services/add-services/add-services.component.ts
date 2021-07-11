import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { ServicesApiService } from '../services-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SelectGuestComponent } from '../select-guest/select-guest.component'


@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {

  constructor(
    private router: Router,
    private servicesApi: ServicesApiService,
  ) { }
  @ViewChild("addServicesReference") addServices: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("serviceCodeReference") serviceCode: jqxInputComponent;
  @ViewChild("serviceNameReference") serviceName: jqxInputComponent;
  @ViewChild("serviceTypeReference") serviceType: jqxComboBoxComponent;
  @ViewChild("guestNameReference") guestName: jqxDropDownListComponent;
  @ViewChild("guestCodeReference") guestCode: jqxDropDownListComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild("selectGuestComponentReference") selectGuest: SelectGuestComponent;

  guestIdStore;

  ngOnInit(): void {
  }

  openWindow(){
    this.addServices.open();
  }

  closeWindow(){
    this.addServices.close();
  }

  guestSelected(guest: any){
    console.log(guest);
    this.guestName.val(guest.guest_name);
    this.guestCode.val(guest.guest_code);
    this.guestIdStore = guest.id;
  }

  saveService(){
    this.loadingSpinner.httpLoader.open();

    let serviceData = {
      account: sessionStorage.getItem('hotel_id'),
      service_code: this.serviceCode.val(),
      service_name: this.serviceName.val(),
      service_type: this.serviceType.val(),
      guest: this.guestIdStore,
    }

    this.servicesApi.postService(serviceData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('service_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/services/view-service');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(serviceData);
  }

}
