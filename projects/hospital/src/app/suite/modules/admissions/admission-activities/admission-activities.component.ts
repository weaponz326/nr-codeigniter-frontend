import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-admission-activities',
  templateUrl: './admission-activities.component.html',
  styleUrls: ['./admission-activities.component.css']
})
export class AdmissionActivitiesComponent implements OnInit {

  constructor() { }

  @ViewChild("diagnosisButtonReference") diagnosisButton: jqxButtonComponent;
  @ViewChild("prescriptionsButtonReference") prescriptionsButton: jqxButtonComponent;
  @ViewChild("laboratoryButtonReference") laboratoryButton: jqxButtonComponent;
  @ViewChild("billsButtonReference") billsButton: jqxButtonComponent;
  @ViewChild("paymentsButtonReference") paymentsButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
