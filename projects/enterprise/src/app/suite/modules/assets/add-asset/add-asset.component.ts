import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AssetsApiService } from '../assets-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { AssetFormComponent } from '../asset-form/asset-form.component'


@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {

  constructor(
    private router: Router,
    private assetsApi: AssetsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('assetFormComponentReference') assetForm: AssetFormComponent;

  navHeading: any[] = [
    { text: "Add Asset", url: "/suite/assets/add-asset" },
  ];

  ngOnInit(): void {
  }

  saveAsset(){
    console.log('u are saving a new asset');
    this.loadingSpinner.httpLoader.open();

    var assetData = {
      account: sessionStorage.getItem('enterprise_id'),
      asset_code: this.assetForm.assetCode.val(),
      asset_name: this.assetForm.assetName.val(),
      asset_type: this.assetForm.assetType.val(),
      category: this.assetForm.category.val(),
      date_purchased: this.assetForm.datePurchased.val(),
      purchased_value: this.assetForm.purchasedValue.val(),
      supplier: this.assetForm.supplier.val(),
      brand: this.assetForm.brand.val(),
      model: this.assetForm.model.val(),
      serial_number: this.assetForm.serialNumber.val(),
      description: this.assetForm.description.val(),
      location: this.assetForm.location.val(),
      condition: this.assetForm.condition.val(),
    }

    console.log(assetData);

    this.assetsApi.postAsset(assetData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('asset_id', res.data.id);
            this.router.navigateByUrl('/suite/assets/view-asset');
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
