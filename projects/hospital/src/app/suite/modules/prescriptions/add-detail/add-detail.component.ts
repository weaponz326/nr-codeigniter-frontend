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

  saveDetail(){
    let detailData = {
      prescription: sessionStorage.getItem('prescription_id'),
      medicine: this.detailForm.medicineTextArea.val(),
      dosage: this.detailForm.dosageTextArea.val(),
      remarks: this.detailForm.remarksTextArea.val(),
    }

    console.log(detailData);

    this.addCommit.emit(detailData);
  }

}
