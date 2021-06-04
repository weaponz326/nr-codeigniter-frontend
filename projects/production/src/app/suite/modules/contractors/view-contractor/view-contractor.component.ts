import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ContractorsApiService } from '../contractors-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { ContractorFormComponent } from '../contractor-form/contractor-form.component';


@Component({
  selector: 'app-view-contractor',
  templateUrl: './view-contractor.component.html',
  styleUrls: ['./view-contractor.component.css']
})
export class ViewContractorComponent implements OnInit {

  constructor(
    private router: Router,
    private contractorsApi: ContractorsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('contractorFormComponentReference') contractorForm: ContractorFormComponent;

  navHeading: any[] = [
    { text: "All Contractors", url: "/suite/contractors/all-contractors" },
    { text: "View Contractor", url: "/suite/contractors/view-contractor" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.contractorsApi.getSingleContractor()
      .subscribe(
        res => {
          console.log(res);
          this.contractorForm.contractorName.val(res.contractor_name);
          this.contractorForm.category.val(res.category);
          this.contractorForm.phone.val(res.phone);
          this.contractorForm.email.val(res.email);
          this.contractorForm.address.val(res.address);
          this.contractorForm.country.val(res.country);
          this.contractorForm.state.val(res.state);
          this.contractorForm.city.val(res.city);
          this.contractorForm.postCode.val(res.post_code);
          this.contractorForm.website.val(res.website);
          this.contractorForm.primaryContract.val(res.primary_contract);
          this.contractorForm.projectName.val(res.project_name);
          this.contractorForm.contractType.val(res.contract_type);
          this.contractorForm.workDescription.val(res.work_description);
          this.contractorForm.workStartDate.val(res.work_start_date);
          this.contractorForm.workEndDate.val(res.work_end_date);
          this.contractorForm.contractStatus.val(res.contract_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveContractor(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a contractor");

    var contractorData = {
      account: sessionStorage.getItem('production_id'),
      contractor_name: this.contractorForm.contractorName.val(),
      category: this.contractorForm.category.val(),
      phone: this.contractorForm.phone.val(),
      email: this.contractorForm.email.val(),
      address: this.contractorForm.address.val(),
      country: this.contractorForm.country.val(),
      state: this.contractorForm.state.val(),
      city: this.contractorForm.city.val(),
      post_code: this.contractorForm.postCode.val(),
      website: this.contractorForm.website.val(),
      primary_contract: this.contractorForm.primaryContract.val(),
      project_name: this.contractorForm.projectName.val(),
      contract_type: this.contractorForm.contractType.val(),
      work_description: this.contractorForm.workDescription.val(),
      work_start_date: this.contractorForm.workStartDate.val(),
      work_end_date: this.contractorForm.workEndDate.val(),
      contract_status: this.contractorForm.contractStatus.val(),
    }

    this.contractorsApi.putContractor(contractorData)
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

    console.log(contractorData);
  }

  deleteContractor(){
    console.log("dude... u are gonna delete the contractor?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.contractorsApi.deleteContractor()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/contractor/all-contractor');
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
