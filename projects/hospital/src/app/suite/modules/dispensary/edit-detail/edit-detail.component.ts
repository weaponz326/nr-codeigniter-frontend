import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DetailFormComponent } from '../detail-form/detail-form.component'


@Component({
  selector: 'app-edit-detail',
  templateUrl: './edit-detail.component.html',
  styleUrls: ['./edit-detail.component.css']
})
export class EditDetailComponent implements OnInit {

  constructor() { }

  @ViewChild("editDetailReference") editDetailWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("detailFormComponentReference") detailForm: DetailFormComponent

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  detailId: number;

  // open edit account popup dialog window
  openWindow(event: any){
    this.editDetailWindow.open();

    console.log(event.args.row.bounddata);
    this.detailId = event.args.row.bounddata.id;

    this.detailForm.drugIdStore = event.args.row.bounddata.drug_id;
    this.detailForm.drugNameInput.val(event.args.row.bounddata.drug_name);
    this.detailForm.ndcNumberInput.val(event.args.row.bounddata.ndc_number);
    this.detailForm.remarksTextArea.val(event.args.row.bounddata.remarks);
  }

  closeWindow(){
    this.editDetailWindow.close();
  }

  saveDetail(){
    let detailData = {
      id: this.detailId,
      dispensary: sessionStorage.getItem('dispensary_id'),
      drug_id: this.detailForm.drugIdStore,
      drug_name: this.detailForm.drugNameInput.val(),
      ndc_number: this.detailForm.ndcNumberInput.val(),
      remarks: this.detailForm.remarksTextArea.val(),
    }

    console.log(detailData);
    this.editCommit.emit(detailData);

    this.closeWindow();
  }

  deleteDetail(){
    this.deleteCommit.emit(this.detailId);
    this.closeWindow();
  }

}
