import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameReference') firstName: jqxInputComponent;
  @ViewChild('lastNameReference') lastName: jqxInputComponent;
  @ViewChild('sexReference') sex: jqxDropDownListComponent;
  @ViewChild('imageUpload') photo: ElementRef;
  @ViewChild('nationalityReference') nationality: jqxInputComponent;
  @ViewChild('occupationReference') occupation: jqxInputComponent;
  @ViewChild('religionReference') religion: jqxInputComponent;
  @ViewChild('phoneReference') phone: jqxInputComponent;
  @ViewChild('emailReference') email: jqxInputComponent;
  @ViewChild('addressReference') address: jqxTextAreaComponent;
  @ViewChild('countryReference') country: jqxInputComponent;
  @ViewChild('stateReference') state: jqxInputComponent;
  @ViewChild('cityReference') city: jqxInputComponent;
  @ViewChild('postCodeReference') postCode: jqxInputComponent;
  @ViewChild('memberCodeReference') memberCode: jqxInputComponent;
  @ViewChild('dateJoinedReference') dateJoined: jqxDateTimeInputComponent;
  @ViewChild('membershipStatusReference') membershipStatus: jqxDropDownListComponent;

  image: any;
  imgSrc = '/projects/personal/src/assets/images/utilities/photo-avatar.jpg';

  sexSource: any[] = ["Male", "Female"];
  membershipStatusSource: any[] = ["Active", "Distant Member", "Imactive", "Dismissed"];

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

}
