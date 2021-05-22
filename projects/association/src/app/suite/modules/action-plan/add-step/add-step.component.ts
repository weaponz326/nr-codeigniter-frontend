import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrls: ['./add-step.component.css']
})
export class AddStepComponent implements OnInit {

  constructor() { }

  @ViewChild("addStepReference") addStepWindow: jqxWindowComponent;
  @ViewChild("stepTextAreaReference") stepTextArea: jqxTextAreaComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  stepData: any;

  // open add account popup dialog window
  openWindow(){
    this.addStepWindow.open();
  }

  closeWindow(){
    this.addStepWindow.close();
  }

  saveStep(){
    this.stepData = {
      plan: sessionStorage.getItem('plan_id'),
      step_date: this.stepTextArea.val(),
    }

    console.log(this.stepData);
    this.addCommit.emit(this.stepData);
    this.closeWindow();
  }


}
