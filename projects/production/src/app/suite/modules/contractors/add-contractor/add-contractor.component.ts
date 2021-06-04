import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ContractorsApiService } from '../contractors-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { ContractorFormComponent } from '../contractor-form/contractor-form.component';


@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.css']
})
export class AddContractorComponent implements OnInit {

  constructor(
    private router: Router,
    private contractorsApi: ContractorsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('contractorFormComponentReference') contractorForm: ContractorFormComponent;

  navHeading: any[] = [
    { text: "Add Contractor", url: "/suite/contractors/new-contractor" },
  ];

  ngOnInit(): void {
  }

  saveContractor(){
    console.log('u are saving a new contractor');
    this.loadingSpinner.httpLoader.open();

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

    console.log(contractorData);

    this.contractorsApi.postContractor(contractorData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('contractor_id', res.data.id);
            this.router.navigateByUrl('/suite/contractors/view-contractor');
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
