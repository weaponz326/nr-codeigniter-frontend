import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { EmployeesApiService } from '../employees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { EmployeeFormComponent } from '../employee-form/employee-form.component'


@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(
    private router: Router,
    private employeesApi: EmployeesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('employeeFormComponentReference') employeeForm: EmployeeFormComponent;

  navHeading: any[] = [
    { text: "New Employees", url: "/suite/employees/new-employee" },
  ];

  ngOnInit(): void {
  }

  saveEmployee(){
    console.log('u are saving a new employee');
    this.loadingSpinner.httpLoader.open();

    let dob = '';
    if (this.employeeForm.dobYear.val() == '' || this.employeeForm.dobMonth.val() == '' || this.employeeForm.dobDay.val() == '') dob = null;
    else dob = this.employeeForm.dobYear.val() + '-' + this.employeeForm.dobMonth.val() + '-' + this.employeeForm.dobDay.val()

    var employeeData = {
      account: sessionStorage.getItem('enterprise_id'),
      first_name: this.employeeForm.firstName.val(),
      last_name: this.employeeForm.lastName.val(),
      sex: this.employeeForm.sex.val(),
      date_of_birth: dob,
      photo: this.employeeForm.image,
      nationality: this.employeeForm.nationality.val(),
      religion: this.employeeForm.religion.val(),
      phone: this.employeeForm.phone.val(),
      email: this.employeeForm.email.val(),
      address: this.employeeForm.address.val(),
      state: this.employeeForm.state.val(),
      city: this.employeeForm.city.val(),
      post_code: this.employeeForm.postCode.val(),
      employee_code: this.employeeForm.employeeCode.val(),
      department: this.employeeForm.department.val(),
      job: this.employeeForm.job.val(),
      pay_grade: this.employeeForm.payGrade.val(),
      work_status: this.employeeForm.workStatus.val(),
      started_work: this.employeeForm.startedWork.val(),
      ended_work: this.employeeForm.endedWork.val(),
    }

    console.log(employeeData);

    this.employeesApi.postEmployee(employeeData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('employee_id', res.data.id);
            this.router.navigateByUrl('/suite/employees/view-employee');
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
