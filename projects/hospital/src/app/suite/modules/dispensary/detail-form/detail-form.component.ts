import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SelectDrugComponent } from '../select-drug/select-drug.component'


@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  constructor() { }

  @ViewChild("drugNameReference") drugNameInput: jqxInputComponent;
  @ViewChild("ndcNumberReference") ndcNumberInput: jqxInputComponent;
  @ViewChild("remarksReference") remarksTextArea: jqxTextAreaComponent;

  @ViewChild("selectDrugComponentReference") selectDrug: SelectDrugComponent;

  drugIdStore;

  ngOnInit(): void {
  }

  drugSelected(drug: any){
    console.log(drug);

    this.drugIdStore = drug.id;
    this.drugNameInput.val(drug.drug_name);
    this.ndcNumberInput.val(drug.ndc_number);
  }

}
