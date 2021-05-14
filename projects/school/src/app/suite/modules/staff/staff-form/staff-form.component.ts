import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel'

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameReference') firstNameInput: jqxInputComponent;
  @ViewChild('lastNameReference') lastNameInput: jqxInputComponent;
  @ViewChild('sexReference') sex: jqxDropDownListComponent;
  @ViewChild('dobDayReference') dobDay: jqxComboBoxComponent;
  @ViewChild('dobMonthReference') dobMonth: jqxComboBoxComponent;
  @ViewChild('dobYearReference') dobYear: jqxComboBoxComponent;
  @ViewChild('imageUpload') photo: ElementRef;
  @ViewChild('nationalityReference') nationalityInput: jqxInputComponent;
  @ViewChild('religionReference') religionInput: jqxInputComponent;
  @ViewChild('phoneReference') phoneInput: jqxInputComponent;
  @ViewChild('emailReference') emailInput: jqxInputComponent;
  @ViewChild('addressReference') addressInput: jqxTextAreaComponent;
  @ViewChild('stateReference') stateInput: jqxInputComponent;
  @ViewChild('cityReference') cityInput: jqxInputComponent;
  @ViewChild('postCodeReference') postCodeInput: jqxInputComponent;
  @ViewChild('staffCodeReference') staffCodeInput: jqxInputComponent;
  @ViewChild('departmentReference') departmentInput: jqxInputComponent;
  @ViewChild('jobReference') jobInput: jqxInputComponent;

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
      this.image = reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.imgSrc = e.target.result;
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
