import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DetailFormComponent } from '../detail-form/detail-form.component'


@Component({
  selector: 'app-add-detail',
  templateUrl: './add-detail.component.html',
  styleUrls: ['./add-detail.component.css']
})
export class AddDetailComponent implements OnInit {

  constructor() { }

  @ViewChild("addDetailReference") addDetailWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("detailFormComponentReference") detailForm: DetailFormComponent

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  // open add detail popup dialog window
  openWindow(){
    this.addDetailWindow.open();
  }

  closeWindow(){
    this.addDetailWindow.close();
  }

  saveDetail(){
    let detailData = {
      dispensary: sessionStorage.getItem('dispensary_id'),
      drug_id: this.detailForm.drugIdStore,
      drug_name: this.detailForm.drugNameInput.val(),
      ndc_number: this.detailForm.ndcNumberInput.val(),
      remarks: this.detailForm.remarksTextArea.val(),
    }

    console.log(detailData);
    this.addCommit.emit(detailData);

    this.closeWindow();
  }

}
