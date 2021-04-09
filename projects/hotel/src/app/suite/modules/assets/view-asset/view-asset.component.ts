import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AssetsApiService } from '../assets-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { AssetFormComponent } from '../asset-form/asset-form.component';


@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private assetsApi: AssetsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('assetFormComponentReference') assetForm: AssetFormComponent;

  navHeading: any[] = [
    { text: "All Assets", url: "/suite/assets/all-assets" },
    { text: "View Asset", url: "/suite/assets/view-asset" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.assetsApi.getSingleAsset()
      .subscribe(
        res => {
          console.log(res);
          this.assetForm.assetCode.val(res.asset_code);
          this.assetForm.assetName.val(res.asset_name);
          this.assetForm.assetType.val(res.asset_type);
          this.assetForm.category.val(res.category);
          this.assetForm.brand.val(res.brand);
          this.assetForm.model.val(res.model);
          this.assetForm.purchasedDate.val(res.purchased_date);
          this.assetForm.location.val(res.location);
          this.assetForm.description.val(res.description);
          this.assetForm.condition.val(res.condition);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveAsset(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a asset");

    var assetData = {
      hotel_id: sessionStorage.getItem('hotel_id'),
      asset_code: this.assetForm.assetCode.val(),
      asset_name: this.assetForm.assetName.val(),
      asset_type: this.assetForm.assetType.val(),
      category: this.assetForm.category.val(),
      brand: this.assetForm.brand.val(),
      model: this.assetForm.model.val(),
      purchased_date: this.assetForm.purchasedDate.val(),
      location: this.assetForm.location.val(),
      description: this.assetForm.description.val(),
      condition: this.assetForm.condition.val(),
    }

    this.assetsApi.putAsset(assetData)
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

    console.log(assetData);
  }

  deleteAsset(){
    console.log("dude... u are gonna delete the asset?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.assetsApi.deleteAsset()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/asset/all-asset');
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
