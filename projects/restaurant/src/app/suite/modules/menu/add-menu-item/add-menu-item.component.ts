import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MenuApiService } from '../menu-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component';


@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent implements OnInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('menuItemFormComponentReference') menuItemForm: MenuItemFormComponent;

  ngOnInit(): void {
  }

  saveItem(){
    console.log('u are saving a new menu item');
    this.loadingSpinner.httpLoader.open();

    var itemData = {
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      item_code: this.menuItemForm.itemCode.val(),
      item_name: this.menuItemForm.itemName.val(),
      category: this.menuItemForm.category.val(),
      price: this.menuItemForm.price.val(),
      description: this.menuItemForm.description.val(),
    }

    console.log(itemData);

    this.menuApi.postMenuItem(itemData)
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
