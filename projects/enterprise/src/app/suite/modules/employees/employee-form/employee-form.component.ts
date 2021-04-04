import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox'
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameReference') firstName: jqxInputComponent;
  @ViewChild('lastNameReference') lastName: jqxInputComponent;
  @ViewChild('sexReference') sex: jqxDropDownListComponent;
  @ViewChild('dobDayReference') dobDay: jqxComboBoxComponent;
  @ViewChild('dobMonthReference') dobMonth: jqxComboBoxComponent;
  @ViewChild('dobYearReference') dobYear: jqxComboBoxComponent;
  @ViewChild('imageUpload') photo: ElementRef;
  @ViewChild('nationalityReference') nationality: jqxInputComponent;
  @ViewChild('religionReference') religion: jqxInputComponent;
  @ViewChild('phoneReference') phone: jqxInputComponent;
  @ViewChild('emailReference') email: jqxInputComponent;
  @ViewChild('addressReference') address: jqxTextAreaComponent;
  @ViewChild('stateReference') state: jqxInputComponent;
  @ViewChild('cityReference') city: jqxInputComponent;
  @ViewChild('postCodeReference') postCode: jqxInputComponent;
  @ViewChild('employeeCodeReference') employeeCode: jqxInputComponent;
  @ViewChild('departmentReference') department: jqxInputComponent;
  @ViewChild('jobReference') job: jqxInputComponent;
  @ViewChild('payGradeReference') payGrade: jqxDropDownListComponent;
  @ViewChild('ssnReference') ssn: jqxInputComponent;
  @ViewChild('workStatusReference') workStatus: jqxDropDownListComponent;
  @ViewChild('startedWorkDateReference') startedWork: jqxDateTimeInputComponent;
  @ViewChild('endedWorkDateReference') endedWork: jqxDateTimeInputComponent;

  imgSrc = '/projects/personal/src/assets/images/utilities/photo-avatar.jpg';

  sexSource: any[] = ["Male", "Female"];
  workStatusSource: any[] = ["Active", "Transfered", "Retired"];


  dobDaySource: any[] = this.getDays();
  dobMonthSource: any[] = ['Jan', 'Feb', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  dobYearSource: any[] = this.getYears();

  ngOnInit(): void {
  }

  onImageSelected(e: any){
    const file:File = e.target.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
        reader.onload = (e: any) => {
          this.imgSrc = e.target.result;
        }
    }
  }

  getDays(): any[] {
    var i, n=[];
    for (i=1; i<=31; i++) n.push(i);
    return n;
  }

  getYears(): any[] {
    var i, n=[];
    for (i=1900; i<=2021; i++) n.push(i);
    return n;
  }

}
