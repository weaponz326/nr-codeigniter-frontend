import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';


@Component({
  selector: 'app-add-arrears',
  templateUrl: './add-arrears.component.html',
  styleUrls: ['./add-arrears.component.css']
})
export class AddArrearsComponent implements OnInit {

  constructor() { }

  @ViewChild("addArrearsReference") addArrearsWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("descriptionReference") descriptionInput: jqxInputComponent;
  @ViewChild("sourceReference") sourceInput: jqxInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  sourceId;

  ngOnInit(): void {
  }

  // open add item popup dialog window
  openWindow(){
    this.addArrearsWindow.open();
  }

  closeWindow(){
    this.addArrearsWindow.close();
  }

  feesSelected(event){
    console.log(event);
    this.sourceInput.val(event.fees_description);
    this.sourceId = event.id;
  }

  saveArrears(){
    let arrearsData = {
      item_description: this.descriptionInput.val(),
      source: this.sourceInput.val(),
      source_id: this.sourceId,
    }

    console.log(arrearsData);
    this.addCommit.emit(arrearsData);
    this.closeWindow()
  }

}
