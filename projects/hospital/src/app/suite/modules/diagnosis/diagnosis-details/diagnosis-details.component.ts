import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-diagnosis-details',
  templateUrl: './diagnosis-details.component.html',
  styleUrls: ['./diagnosis-details.component.css']
})
export class DiagnosisDetailsComponent implements OnInit {

  @ViewChild("bloodGroupReference") bloodGroup: jqxDropDownListComponent;
  @ViewChild("temperatureReference") temperature: jqxInputComponent;
  @ViewChild("weightReference") weight: jqxInputComponent;
  @ViewChild("heightReference") height: jqxInputComponent;
  @ViewChild("bloodPressureReference") bloodPressure: jqxInputComponent;
  @ViewChild("pulseReference") pulse: jqxInputComponent;
  @ViewChild("diagnosisDetailReference") diagnosisDetail: jqxTextAreaComponent;
  @ViewChild("treatmentReference") treatment: jqxTextAreaComponent;
  @ViewChild("remarksReference") remarks: jqxTextAreaComponent;

  constructor() { }

  ngOnInit(): void {
  }

  bloodGroupSource: any[] = ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'];

}
