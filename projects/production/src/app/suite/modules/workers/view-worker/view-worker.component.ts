import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { environment } from 'projects/production/src/environments/environment';

import { WorkersApiService } from '../workers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { WorkerFormComponent } from '../worker-form/worker-form.component'


@Component({
  selector: 'app-view-worker',
  templateUrl: './view-worker.component.html',
  styleUrls: ['./view-worker.component.css']
})
export class ViewWorkerComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private workersApi: WorkersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('workerFormComponentReference') workerForm: WorkerFormComponent;

  navHeading: any[] = [
    { text: "All Workers", url: "/suite/workers/all-workers" },
    { text: "View Worker", url: "/suite/workers/view-worker" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.workersApi.getSingleWorker()
      .subscribe(
        res => {
          console.log(res);

          if (res.date_of_birth != null){
            let dobArray = res.date_of_birth.split('-');
            this.workerForm.dobYear.val(dobArray[0]);
            this.workerForm.dobMonth.val(dobArray[1]);
            this.workerForm.dobDay.val(dobArray[2]);
          }

          if (res.photo != null){
            this.workerForm.imgSrc = environment.productionUrl + res.photo;
          }

          this.workerForm.firstNameInput.val(res.first_name);
          this.workerForm.lastNameInput.val(res.last_name);
          this.workerForm.sexDropDownList.val(res.sex);
          this.workerForm.photo.nativeElement.value = res.photo;
          this.workerForm.nationalityInput.val(res.nationality);
          this.workerForm.religionInput.val(res.religion);
          this.workerForm.phoneInput.val(res.phone);
          this.workerForm.emailInput.val(res.email);
          this.workerForm.addressInput.val(res.address);
          this.workerForm.stateInput.val(res.state);
          this.workerForm.cityInput.val(res.city);
          this.workerForm.postCodeInput.val(res.post_code);
          this.workerForm.workerCodeInput.val(res.worker_code);
          this.workerForm.departmentInput.val(res.department);
          this.workerForm.specialityInput.val(res.speciality);
          this.workerForm.jobInput.val(res.job);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveWorker(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a worker");

    let dob = '';
    if (this.workerForm.dobYear.val() == '' || this.workerForm.dobMonth.val() == '' || this.workerForm.dobDay.val() == '') dob = null;
    else dob = this.workerForm.dobYear.val() + '-' + this.workerForm.dobMonth.val() + '-' + this.workerForm.dobDay.val();

    var workerData = {
      account: sessionStorage.getItem('worker_id'),
      first_name: this.workerForm.firstNameInput.val(),
      last_name: this.workerForm.lastNameInput.val(),
      sex: this.workerForm.sexDropDownList.val(),
      date_of_birth: dob,
      photo: this.workerForm.image,
      nationality: this.workerForm.nationalityInput.val(),
      religion: this.workerForm.religionInput.val(),
      phone: this.workerForm.phoneInput.val(),
      email: this.workerForm.emailInput.val(),
      address: this.workerForm.addressInput.val(),
      state: this.workerForm.stateInput.val(),
      city: this.workerForm.cityInput.val(),
      post_code: this.workerForm.postCodeInput.val(),
      worker_code: this.workerForm.workerCodeInput.val(),
      department: this.workerForm.departmentInput.val(),
      speciality: this.workerForm.specialityInput.val(),
      job: this.workerForm.jobInput.val(),
    }

    this.workersApi.putWorker(workerData)
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

    console.log(workerData);
  }

  deleteWorker(){
    console.log("dude... u are gonna delete the worker?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.workersApi.deleteWorker()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/workers/all-workers');
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
