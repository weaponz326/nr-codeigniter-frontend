import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ChecklistFormComponent } from '../checklist-form/checklist-form.component'

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.css']
})
export class AddChecklistComponent implements OnInit {

  constructor() { }

  @ViewChild("addChecklistReference") addChecklistWindow: jqxWindowComponent;
  @ViewChild("checklistTextAreaReference") checklistTextArea: jqxTextAreaComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("checklostFormComponentReference") checklistForm: ChecklistFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addChecklistWindow.open();
  }

  closeWindow(){
    this.addChecklistWindow.close();
  }

  saveChecklist(){
    let checklistData = {
      plan: sessionStorage.getItem('housekeeping_id'),
      description: this.checklistForm.description.val(),
      status: this.checklistForm.status.val(),
      remarks: this.checklistForm.remarks.val(),
    }

    console.log(checklistData);
    this.addCommit.emit(checklistData);
    this.closeWindow();
  }

}
