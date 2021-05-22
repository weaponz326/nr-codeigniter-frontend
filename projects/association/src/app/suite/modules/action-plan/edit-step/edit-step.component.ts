import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-edit-step',
  templateUrl: './edit-step.component.html',
  styleUrls: ['./edit-step.component.css']
})
export class EditStepComponent implements OnInit {

  constructor() { }

  @ViewChild("editStepReference") editStepWindow: jqxWindowComponent;
  @ViewChild("stepTextAreaReference") stepTextArea: jqxTextAreaComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  stepData: any;
  stepId: number;

  // open edit account popup dialog window
  openWindow(event: any){
    this.editStepWindow.open();

    console.log(event.args.row.bounddata);
    this.stepId = event.args.row.bounddata.id;

    this.stepTextArea.val(event.args.row.bounddata.step);
  }

  closeWindow(){
    this.editStepWindow.close();
  }

  saveStep(){
    this.stepData = {
      id: this.stepId,
      plan: sessionStorage.getItem('plan_id'),
      step: this.stepTextArea.val(),
    }

    console.log(this.stepData);
    this.editCommit.emit(this.stepData);
    this.closeWindow();
  }

  deleteStep(){
    this.deleteCommit.emit(this.stepId);
    this.closeWindow();
  }

}
