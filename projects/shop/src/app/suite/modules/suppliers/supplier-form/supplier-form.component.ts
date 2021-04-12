import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';


@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.css']
})
export class SupplierFormComponent implements OnInit {

  constructor() { }

  @ViewChild("supplierCodeReference") supplierCode: jqxInputComponent;
  @ViewChild("supplierNameReference") supplierName: jqxInputComponent;
  @ViewChild("phoneReference") phone: jqxInputComponent;
  @ViewChild("emailReference") email: jqxInputComponent;
  @ViewChild("addressReference") address: jqxTextAreaComponent;
  @ViewChild("productReference") product: jqxListBoxComponent;

  ngOnInit(): void {
  }

}
