import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';


@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  constructor() { }

  @ViewChild("addBatchReference") addBatchWindow: jqxWindowComponent;
  @ViewChild("batchNameReference") batchNameInput: jqxInputComponent;
  @ViewChild("batchSymbolReference") batchSymbolInput: jqxInputComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  // open add batch popup dialog window
  openWindow(){
    this.addBatchWindow.open();
  }

  closeWindow(){
    this.addBatchWindow.close();
  }

  saveBatch(){
    let batchData = {
      roster: sessionStorage.getItem('roster_id'),
      batch_name: this.batchNameInput.val(),
      batch_symbol: this.batchSymbolInput.val(),
    }

    console.log(batchData);
    this.addCommit.emit(batchData);

    this.closeWindow();
  }

}
