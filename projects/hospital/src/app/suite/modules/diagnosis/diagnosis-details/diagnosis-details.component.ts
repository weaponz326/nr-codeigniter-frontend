import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';


@Component({
  selector: 'app-diagnosis-details',
  templateUrl: './diagnosis-details.component.html',
  styleUrls: ['./diagnosis-details.component.css']
})
export class DiagnosisDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild("bloodGroupReference") bloodGroup: jqxInputComponent;
  @ViewChild("temperatureReference") temperature: jqxInputComponent;
  @ViewChild("weightReference") weight: jqxInputComponent;
  @ViewChild("heightReference") height: jqxInputComponent;
  @ViewChild("bloodPressureReference") bloodPressure: jqxInputComponent;
  @ViewChild("pulseReference") pulse: jqxInputComponent;
  @ViewChild("diagnosisReference") diagnosis: jqxTextAreaComponent;
  @ViewChild("treatmentReference") treatment: jqxTextAreaComponent;
  @ViewChild("remarksReference") remarks: jqxTextAreaComponent;

  ngOnInit(): void {
  }

}
