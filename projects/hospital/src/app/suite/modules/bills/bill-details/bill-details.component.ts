// includes edit bill components
// edit bill components are located in an edit-bill sub folder

import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {

  @ViewChild('treatmentInputReference') treatmentInput: jqxNumberInputComponent;
  @ViewChild('doctorsInputReference') doctorsInput: jqxNumberInputComponent;
  @ViewChild('medicineInputReference') medicineInput: jqxNumberInputComponent;
  @ViewChild('laboratoryInputReference') laboratoryInput: jqxNumberInputComponent;
  @ViewChild('wardInputReference') wardInput: jqxNumberInputComponent;
  @ViewChild('servicesInputReference') servicesInput: jqxNumberInputComponent;
  @ViewChild('totalInputReference') totalInput: jqxNumberInputComponent;
  @ViewChild('treatmentButtonReference') treatmentButton: jqxButtonComponent;
  @ViewChild('doctorsButtonReference') doctorsButton: jqxButtonComponent;
  @ViewChild('medicineButtonReference') medicineButton: jqxButtonComponent;
  @ViewChild('laboratoryButtonReference') laboratoryButton: jqxButtonComponent;
  @ViewChild('wardButtonReference') wardButton: jqxButtonComponent;
  @ViewChild('servicesButtonReference') servicesButton: jqxButtonComponent;
  @ViewChild('totalButtonReference') totalButton: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
