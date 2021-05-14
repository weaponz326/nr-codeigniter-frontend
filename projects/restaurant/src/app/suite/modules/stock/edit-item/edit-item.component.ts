import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { StockApiService } from '../stock-api.service';
import { ItemFormComponent } from '../item-form/item-form.component';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(
    private router: Router,
    private stockApi: StockApiService
  ) { }

  @ViewChild("editItemReference") editItem: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemFormComponentReference") itemForm: ItemFormComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/suite/stock/all-items" },
    { text: "View Item", url: "/suite/stock/view-item" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.stockApi.getSingleItem()
      .subscribe(
        res => {
          console.log(res);

          this.itemForm.itemCode.val(res.item_code);
          this.itemForm.itemName.val(res.item_name);
          this.itemForm.category.val(res.category);
          this.itemForm.itemType.val(res.item_type);
          this.itemForm.quantity.val(res.quantity);
          this.itemForm.refillOrdered.val(res.refill_ordered);
        }
      )
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

    this.stockApi.putItem(itemData)
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

  deleteStock(){
    console.log("dude... u are gonna delete the stock?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.stockApi.deleteItem()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/stock/all-stock');
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
