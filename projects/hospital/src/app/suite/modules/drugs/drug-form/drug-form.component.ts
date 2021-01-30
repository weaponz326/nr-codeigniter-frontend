import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-drug-form',
  templateUrl: './drug-form.component.html',
  styleUrls: ['./drug-form.component.css']
})
export class DrugFormComponent implements OnInit {

  constructor() { }

  @ViewChild('ndcNumberReference') ndcNumber: jqxInputComponent;
  @ViewChild('drugNameReference') drugName: jqxInputComponent;
  @ViewChild('genericNameReference') genericName: jqxInputComponent;
  @ViewChild('unitDoseReference') unitDose: jqxInputComponent;
  @ViewChild('manufacturerReference') manufacturer: jqxInputComponent;
  @ViewChild('drugTypeReference') drugType: jqxComboBoxComponent;
  @ViewChild('categoryReference') category: jqxComboBoxComponent;
  @ViewChild('unitPriceReference') unitPrice: jqxNumberInputComponent;
  @ViewChild('batchNumberReference') batchNumber: jqxNumberInputComponent;
  @ViewChild('purchasedDateReference') purchasedDate: jqxDateTimeInputComponent;
  @ViewChild('initialQuantityReference') initialQuantity: jqxNumberInputComponent;
  @ViewChild('dispensedQuantityReference') dispensedQuantity: jqxNumberInputComponent;
  @ViewChild('remainingQuantityReference') remainingQuantity: jqxNumberInputComponent;
  @ViewChild('manufacturingDateReference') manufacturingDate: jqxDateTimeInputComponent;
  @ViewChild('expiryDateReference') expiryDate: jqxDateTimeInputComponent;
  @ViewChild('storageLocationReference') storageLocation: jqxInputComponent;
  @ViewChild('storageBinReference') storageBin: jqxInputComponent;
  @ViewChild('refillOrderedReference') refillOrdered: jqxDateTimeInputComponent;

  ngOnInit(): void {
  }

  drugTypeSource: any[] = ['Capsules', 'Syrup', 'Tablets'];

}
