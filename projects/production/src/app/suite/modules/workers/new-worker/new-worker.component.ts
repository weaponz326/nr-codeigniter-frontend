import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { WorkersApiService } from '../workers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { WorkerFormComponent } from '../worker-form/worker-form.component'


@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css']
})
export class NewWorkerComponent implements OnInit {

  constructor(
    private router: Router,
    private workersApi: WorkersApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('workerFormComponentReference') workerForm: WorkerFormComponent;

  navHeading: any[] = [
    { text: "New Worker", url: "/suite/workers/new-worker" },
  ];

  ngOnInit(): void {
  }

  saveWorker(){
    console.log('u are saving a new worker');
    this.loadingSpinner.httpLoader.open();

    var workerData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      first_name: this.workerForm.firstNameInput.val(),
      last_name: this.workerForm.lastNameInput.val(),
      sex: this.workerForm.sexDropDownList.val(),
      date_of_birth: this.workerForm.dobInput.val(),
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

    console.log(workerData);

    this.workersApi.postWorker(workerData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('worker_id', res.worker_id);
            this.router.navigateByUrl('/suite/workers/view-worker');
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
