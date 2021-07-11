import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ChecklistFormComponent } from '../checklist-form/checklist-form.component'


@Component({
  selector: 'app-edit-checklist',
  templateUrl: './edit-checklist.component.html',
  styleUrls: ['./edit-checklist.component.css']
})
export class EditChecklistComponent implements OnInit {

  constructor() { }

  @ViewChild("editChecklistReference") editChecklistWindow: jqxWindowComponent;
  @ViewChild("checklistTextAreaReference") checklistTextArea: jqxTextAreaComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild("checklostFormComponentReference") checklistForm: ChecklistFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  checklistId: number;

  // open edit account popup dialog window
  openWindow(event: any){
    this.editChecklistWindow.open();

    console.log(event.args.row.bounddata);
    this.checklistId = event.args.row.bounddata.id;

    this.checklistTextArea.val(event.args.row.bounddata.checklist);
  }

  closeWindow(){
    this.editChecklistWindow.close();
  }

  saveChecklist(){
    let checklistData = {
      id: this.checklistId,
      item_number: this.checklistForm.itemNumber.val(),
      item_description: this.checklistForm.itemDescription.val(),
      status: this.checklistForm.status.val(),
      remarks: this.checklistForm.remarks.val(),
    }

    console.log(checklistData);
    this.editCommit.emit(checklistData);
    this.closeWindow();
  }

  deleteChecklist(){
    this.deleteCommit.emit(this.checklistId);
    this.closeWindow();
  }

}
