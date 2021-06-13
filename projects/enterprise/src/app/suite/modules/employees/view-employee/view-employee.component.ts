import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { environment } from 'projects/enterprise/src/environments/environment';

import { EmployeesApiService } from '../employees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { EmployeeFormComponent } from '../employee-form/employee-form.component'


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private employeesApi: EmployeesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('employeeFormComponentReference') employeeForm: EmployeeFormComponent;

  navHeading: any[] = [
    { text: "All Employees", url: "/suite/employees/all-employees" },
    { text: "View Employee", url: "/suite/employees/view-employee" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.employeesApi.getSingleEmployee()
      .subscribe(
        res => {
          console.log(res);

          if (res.date_of_birth != null){
            let dobArray = res.date_of_birth.split('-');
            this.employeeForm.dobYear.val(dobArray[0]);
            this.employeeForm.dobMonth.val(dobArray[1]);
            this.employeeForm.dobDay.val(dobArray[2]);
          }

          if (res.photo != null){
            this.employeeForm.imgSrc = environment.enterpriseUrl + res.photo;
          }
          
          this.employeeForm.firstName.val(res.first_name);
          this.employeeForm.lastName.val(res.last_name);
          this.employeeForm.sex.val(res.sex);
          this.employeeForm.photo.nativeElement.value = res.photo;
          this.employeeForm.nationality.val(res.nationality);
          this.employeeForm.religion.val(res.religion);
          this.employeeForm.phone.val(res.phone);
          this.employeeForm.email.val(res.email);
          this.employeeForm.address.val(res.address);
          this.employeeForm.state.val(res.state);
          this.employeeForm.city.val(res.city);
          this.employeeForm.postCode.val(res.post_code);
          this.employeeForm.employeeCode.val(res.employee_code);
          this.employeeForm.department.val(res.department);
          this.employeeForm.job.val(res.job);
          this.employeeForm.payGrade.val(res.pay_grade);
          this.employeeForm.workStatus.val(res.work_status);
          this.employeeForm.startedWork.val(res.started_work);
          this.employeeForm.endedWork.val(res.ended_work);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveEmployee(){
    console.log('u are saving a new employee');
    this.loadingSpinner.httpLoader.open();

    let dob = '';
    if (this.employeeForm.dobYear.val() == '' || this.employeeForm.dobMonth.val() == '' || this.employeeForm.dobDay.val() == '') dob = null;
    else dob = this.employeeForm.dobYear.val() + '-' + this.employeeForm.dobMonth.val() + '-' + this.employeeForm.dobDay.val();    
    
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

    this.employeesApi.putEmployee(employeeData)
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

  deleteEmployee(){
    console.log("dude... u are gonna delete the employee?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.employeesApi.deleteEmployee()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/employees/all-employees');
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
