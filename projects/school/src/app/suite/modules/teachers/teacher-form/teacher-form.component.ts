import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {

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
  @ViewChild('teacherCodeReference') teacherCode: jqxInputComponent;
  @ViewChild('departmentReference') department: jqxInputComponent;
  @ViewChild('termReference') term: jqxDropDownListComponent;
  @ViewChild('gradeReference') grade: jqxInputComponent;
  @ViewChild('educationReference') education: jqxInputComponent;

  image: any;
  imgSrc = '/projects/personal/src/assets/images/utilities/photo-avatar.jpg';

  sexSource: any[] = ["Male", "Female"];
  dobDaySource: any[] = this.getDays();
  dobMonthSource: any[] = this.getMonths();
  dobYearSource: any[] = this.getYears();

  ngOnInit(): void {
  }

  onImageSelected(e: any){
    const file: File = e.target.files[0];

    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
        this.image = reader.result;
      }
    }
  }

  getDays(): any[] {
    var doubleDigit, n=[];
    for (let i=1; i<=31; i++) {
      doubleDigit = (i >= 10) ? i : "0" + i.toString();
      n.push(doubleDigit);
    }

    return n;
  }

  getMonths(): any[] {
    var doubleDigit, n=[];
    for (let i=1; i<=12; i++) {
      doubleDigit = (i >= 10) ? i : "0" + i.toString();
      n.push(doubleDigit);
    }

    return n;
  }

  getYears(): any[] {
    var i, n=[];
    for (i=1900; i<=2021; i++) n.push(i);
    return n;
  }

}
