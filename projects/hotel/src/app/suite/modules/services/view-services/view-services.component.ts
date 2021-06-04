import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { ServicesApiService } from '../services-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { SelectGuestComponent } from '../select-guest/select-guest.component'


@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private servicesApi: ServicesApiService,
  ) { }

  @ViewChild("serviceCodeReference") serviceCode: jqxInputComponent;
  @ViewChild("serviceTypeReference") serviceType: jqxComboBoxComponent;
  @ViewChild("guestNameReference") guestName: jqxDropDownListComponent;
  @ViewChild("guestCodeReference") guestCode: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild("selectGuestComponentReference") selectGuest: SelectGuestComponent;

  guestIdStore;

  navHeading: any[] = [
    { text: "All Services", url: "/suite/services/all-services" },
    { text: "View Service", url: "/suite/services/view-service" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.servicesApi.getSingleService()
      .subscribe(
        res => {
          console.log(res);
          this.serviceCode.val(res.service_type);
          this.serviceType.val(res.service_type);
          this.guestName.val(res.guest.guest_name);
          this.guestCode.val(res.guest.guest_code);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveService(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a service");

    var serviceData = {
      account: sessionStorage.getItem('hotel_id'),
      service_type: this.serviceCode.val(),
      service_code: this.serviceCode.val(),
      guest: this.guestIdStore,
    }

    this.servicesApi.putService(serviceData)
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

    console.log(serviceData);
  }

  deleteService(){
    console.log("dude... u are gonna delete the service?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.servicesApi.deleteService()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/services/all-services');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  guestSelected(guest: any){
    console.log(guest);
    this.guestName.val(guest.guest_name);
    this.guestCode.val(guest.guest_code);
    this.guestIdStore = guest.id;
  }

}
