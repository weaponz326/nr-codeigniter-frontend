import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';


@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})
export class EditBatchComponent implements OnInit {

  constructor() { }

  @ViewChild("editBatchReference") editBatchWindow: jqxWindowComponent;
  @ViewChild("batchNameReference") batchNameInput: jqxInputComponent;
  @ViewChild("batchSymbolReference") batchSymbolInput: jqxInputComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  batchId: number;

  // open edit account popup dialog window
  openWindow(event: any){
    this.editBatchWindow.open();

    console.log(event.args.row.bounddata);
    this.batchId = event.args.row.bounddata.id;

    this.batchNameInput.val(event.args.row.bounddata.batch_name);
    this.batchSymbolInput.val(event.args.row.bounddata.batch_symbol);
  }

  closeWindow(){
    this.editBatchWindow.close();
  }

  saveBatch(){
    let batchData = {
      id: this.batchId,
      roster: sessionStorage.getItem('roster_id'),
      batch_name: this.batchNameInput.val(),
      batch_symbol: this.batchSymbolInput.val(),
    }

    console.log(batchData);
    this.editCommit.emit(batchData);

    this.closeWindow();
  }

  deleteBatch(){
    this.deleteCommit.emit(this.batchId);
  }

}
