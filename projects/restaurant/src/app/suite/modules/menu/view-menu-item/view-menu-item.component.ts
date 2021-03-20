import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MenuApiService } from '../menu-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { MenuItemFormComponent } from '../menu-item-form/menu-item-form.component';


@Component({
  selector: 'app-view-menu-item',
  templateUrl: './view-menu-item.component.html',
  styleUrls: ['./view-menu-item.component.css']
})
export class ViewMenuItemComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private menuApi: MenuApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('menuItemFormComponentReference') menuItemForm: MenuItemFormComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/suite/menu/all-items" },
    { text: "View Item", url: "/suite/menu/view-item" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.menuApi.getSingleMenuItem()
      .subscribe(
        res => {
          console.log(res);
          this.menuItemForm.itemCode.val(res.item_code);
          this.menuItemForm.itemName.val(res.item_name);
          this.menuItemForm.category.val(res.category);
          this.menuItemForm.price.val(res.price);
          this.menuItemForm.description.val(res.description);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveItem(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a menu item");

    var itemData = {
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      item_code: this.menuItemForm.itemCode.val(),
      item_name: this.menuItemForm.itemName.val(),
      category: this.menuItemForm.category.val(),
      price: this.menuItemForm.price.val(),
      description: this.menuItemForm.description.val(),
    }

    this.menuApi.putMenuItem(itemData)
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

    console.log(itemData);
  }

  deleteItem(){
    console.log("dude... u are gonna delete the menu item?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.menuApi.deleteMenuItem()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/menu/all-items');
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
