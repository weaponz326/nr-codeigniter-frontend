import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

import { AdminApiService } from '../admin-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.css']
})
export class AccessFormComponent implements OnInit {

  constructor(
    private adminApi: AdminApiService,
  ) { }

  @ViewChild('adminCheckBoxReference') adminCheckBox: jqxComboBoxComponent;
  @ViewChild('customersCheckBoxReference') customersCheckBox: jqxComboBoxComponent;
  @ViewChild('deliveriesCheckBoxReference') deliveriesCheckBox: jqxComboBoxComponent;
  @ViewChild('menuCheckBoxReference') menuCheckBox: jqxComboBoxComponent;
  @ViewChild('ordersCheckBoxReference') ordersCheckBox: jqxComboBoxComponent;
  @ViewChild('paymentsCheckBoxReference') paymentsCheckBox: jqxComboBoxComponent;
  @ViewChild('portalCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('settingsCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;
  @ViewChild('staffCheckBoxReference') staffCheckBox: jqxComboBoxComponent;
  @ViewChild('reservationsCheckBoxReference') reservationsCheckBox: jqxComboBoxComponent;
  @ViewChild('tablesCheckBoxReference') tablesCheckBox: jqxComboBoxComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  initAccessLevel(){
    this.adminApi.getUserAccess()
      .subscribe(
        res => {
          console.log(res);

          this.adminCheckBox.val(res.admin_access);
          this.customersCheckBox.val(res.customers_access);
          this.deliveriesCheckBox.val(res.deliveries_access);
          this.menuCheckBox.val(res.menu_access);
          this.ordersCheckBox.val(res.orders_access);
          this.paymentsCheckBox.val(res.payments_access);
          this.portalCheckBox.val(res.portal_access);
          this.settingsCheckBox.val(res.settings_access);
          this.staffCheckBox.val(res.staff_access);
          this.reservationsCheckBox.val(res.reservations_access);
          this.tablesCheckBox.val(res.tables_access);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveAccessLevel(){
    let access = {
      admin_access: this.adminCheckBox.val(),
      customers_access: this.customersCheckBox.val(),
      delveries_access: this.deliveriesCheckBox.val(),
      menu_access: this.menuCheckBox.val(),
      ordes_access: this.ordersCheckBox.val(),
      true_access: this.paymentsCheckBox.val(),
      portl_access: this.portalCheckBox.val(),
      settings_access: this.settingsCheckBox.val(),
      staff_access: this.staffCheckBox.val(),
      reservations_access: this.reservationsCheckBox.val(),
      tables_access: this.tablesCheckBox.val()
    }

    this.adminApi.putUserAccess(access)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.val('true');
      this.customersCheckBox.val('true');
      this.deliveriesCheckBox.val('true');
      this.menuCheckBox.val('true');
      this.ordersCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.settingsCheckBox.val('true');
      this.staffCheckBox.val('true');
      this.reservationsCheckBox.val('true');
      this.tablesCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.adminCheckBox.val('false');
      this.customersCheckBox.val('true');
      this.deliveriesCheckBox.val('true');
      this.menuCheckBox.val('true');
      this.ordersCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('true');
      this.reservationsCheckBox.val('true');
      this.tablesCheckBox.val('true');
    }
    else if (level == 'Staff') {
      this.adminCheckBox.val('false');
      this.customersCheckBox.val('false');
      this.deliveriesCheckBox.val('false');
      this.menuCheckBox.val('false');
      this.ordersCheckBox.val('false');
      this.paymentsCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('false');
      this.reservationsCheckBox.val('false');
      this.tablesCheckBox.val('false');
    }
  }

}
