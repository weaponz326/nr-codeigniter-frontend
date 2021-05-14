import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { StockApiService } from '../stock-api.service';
import { ItemFormComponent } from '../item-form/item-form.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(
    private router: Router,
    private stockApi: StockApiService
  ) { }

  @ViewChild("addItemReference") addItem: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemFormComponentReference") itemForm: ItemFormComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "Add Item", url: "/suite/stock/add-item" },
  ];

  ngOnInit(): void {
  }

  openWindow(){
    this.addItem.open();
  }

  saveItem(){
    var itemData = {
      account: sessionStorage.getItem('restaurant_id'),
      item_code: this.itemForm.itemCode.val(),
      item_name: this.itemForm.itemName.val(),
      category: this.itemForm.category.val(),
      item_type: this.itemForm.itemType.val(),
      quantity: this.itemForm.quantity.val(),
      refill_ordered: this.itemForm.refillOrdered.val(),
    }

    console.log(itemData);

    this.stockApi.postItem(itemData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('stock_item_id', res.data.id);
            this.router.navigateByUrl('/suite/stock/view-item');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
