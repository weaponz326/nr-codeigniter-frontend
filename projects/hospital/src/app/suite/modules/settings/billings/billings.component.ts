import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxRadioButtonComponent } from 'jqwidgets-ng/jqxradiobutton';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.css']
})
export class BillingsComponent implements OnInit {

  constructor() { }

  @ViewChild('smallTeamReference') smallTeamRadioButton: jqxRadioButtonComponent;
  @ViewChild('largeTeamReference') largeTeamRadioButton: jqxRadioButtonComponent;
  @ViewChild('comprehensiveReference') comprehensiveRadioButton: jqxRadioButtonComponent;

  @ViewChild('companyNameReference') companyNameInput: jqxInputComponent;
  @ViewChild('countryReference') countryInput: jqxInputComponent;
  @ViewChild('stateReference') stateInput: jqxInputComponent;
  @ViewChild('cityReference') cityInput: jqxInputComponent;
  @ViewChild('zipCodeReference') zipCodeInput: jqxInputComponent;
  @ViewChild('addressReference') adressTextArea: jqxTextAreaComponent;
  @ViewChild('cardNumberReference') cardNumberInput: jqxInputComponent;
  @ViewChild('expiryReference') expiryInput: jqxInputComponent;
  @ViewChild('secretCodeReference') secretCodeInput: jqxInputComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "Billings", url: "/suite/settings/billings" },
  ];

  selectedPlan: string;

  ngOnInit(): void {
  }

  selectSmallTeam(event: any) {
    console.log(event.args);
    if (event.args.checked == true){
      this.selectedPlan = "smallTeam"
    }
  }

  selectLargeTeam(event: any) {
    console.log(event.args);
    if (event.args.checked == true){
      this.selectedPlan = "largeTeam"
    }
  }

  selectComprehensive(event: any) {
    console.log(event.args);
    if (event.args.checked == true){
      this.selectedPlan = "comprehensive"
    }
  }

}
