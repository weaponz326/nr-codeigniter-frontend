import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DrugsApiService } from '../drugs-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { DrugFormComponent } from '../drug-form/drug-form.component'


@Component({
  selector: 'app-view-drug',
  templateUrl: './view-drug.component.html',
  styleUrls: ['./view-drug.component.css']
})
export class ViewDrugComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private drugsApi: DrugsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('drugFormComponentReference') drugForm: DrugFormComponent;

  navHeading: any[] = [
    { text: "All Drugs", url: "/suite/drugs/all-drugs" },
    { text: "View Drug", url: "/suite/drugs/view-drug" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.drugsApi.getSingleDrug()
      .subscribe(
        res => {
          console.log(res);
          this.drugForm.ndcNumber.val(res.ndc_number);
          this.drugForm.drugName.val(res.drug_name);
          this.drugForm.genericName.val(res.generic_name);
          this.drugForm.unitDose.val(res.unit_dose);
          this.drugForm.manufacturer.val(res.manufacturer);
          this.drugForm.category.val(res.category);
          this.drugForm.drugType.val(res.drug_type);
          this.drugForm.unitPrice.val(res.unit_price);
          this.drugForm.batchNumber.val(res.batch_number);
          this.drugForm.purchasedDate.val(res.purchased_date);
          this.drugForm.initialQuantity.val(res.initial_quantity);
          this.drugForm.dispensedQuantity.val(res.dispensed_quantity);
          this.drugForm.remainingQuantity.val(res.remaining_quantity);
          this.drugForm.manufacturingDate.val(res.manufacturing_date);
          this.drugForm.expiryDate.val(res.expiry_date);
          this.drugForm.storageLocation.val(res.storage_location);
          this.drugForm.storageBin.val(res.storage_bin);
          this.drugForm.refillOrdered.val(res.refill_ordered);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveDrug(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a drug");

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

    this.drugsApi.putDrug(drugData)
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

    console.log(drugData);
  }

  deleteDrug(){
    console.log("dude... u are gonna delete the drug?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.drugsApi.deleteDrug()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/drugs/all-drugs');
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
