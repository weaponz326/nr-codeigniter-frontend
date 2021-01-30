import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DrugsApiService } from '../drugs-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { DrugFormComponent } from '../drug-form/drug-form.component'


@Component({
  selector: 'app-new-drug',
  templateUrl: './new-drug.component.html',
  styleUrls: ['./new-drug.component.css']
})
export class NewDrugComponent implements OnInit {

  constructor(
    private router: Router,
    private drugsApi: DrugsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('drugFormComponentReference') drugForm: DrugFormComponent;

  ngOnInit(): void {
  }

  saveDrug(){
    console.log('u are saving a new drug');
    this.loadingSpinner.httpLoader.open();

    var drugData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      ndc_number: this.drugForm.ndcNumber.val(),
      drug_name: this.drugForm.drugName.val(),
      generic_name: this.drugForm.genericName.val(),
      unit_dose: this.drugForm.unitDose.val(),
      manufacturer: this.drugForm.manufacturer.val(),
      category: this.drugForm.category.val(),
      drug_type: this.drugForm.drugType.val(),
      unit_price: this.drugForm.unitPrice.val(),
      batch_number: this.drugForm.batchNumber.val(),
      purchased_date: this.drugForm.purchasedDate.val(),
      initial_quantity: this.drugForm.initialQuantity.val(),
      dispensed_quantity: this.drugForm.dispensedQuantity.val(),
      remaining_quantity: this.drugForm.remainingQuantity.val(),
      manufacturing_date: this.drugForm.manufacturingDate.val(),
      expiry_date: this.drugForm.expiryDate.val(),
      storage_location: this.drugForm.storageLocation.val(),
      storage_bin: this.drugForm.storageBin.val(),
      refill_ordered: this.drugForm.refillOrdered.val(),
    }

    console.log(drugData);

    this.drugsApi.postDrug(drugData)
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
