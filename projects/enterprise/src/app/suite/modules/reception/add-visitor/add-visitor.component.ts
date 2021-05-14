import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { VisitorFormComponent } from '../visitor-form/visitor-form.component'


@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {

  constructor() { }

  @ViewChild("addVisitorReference") addVisitor: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("visitorFormComponentReference") visitorForm: VisitorFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addVisitor.open();
  }

  closeWindow(){
    this.addVisitor.close();
  }

  saveVisitor(){
    var visitorData = {
      enterprise_id: sessionStorage.getItem('enterprise_id'),
      visit_code: this.visitorForm.visitCode.val(),
      visit_date: this.visitorForm.visitDate.val(),
      visitor_name: this.visitorForm.visitorName.val(),
      visitor_phone: this.visitorForm.visitorPhone.val(),
      arrival: this.visitorForm.arrival.val(),
      departure: this.visitorForm.departure.val(),
      purpose: this.visitorForm.purpose.val(),
      tag_number: this.visitorForm.tagNumber.val(),
    }

    console.log(visitorData);
    this.addCommit.emit(visitorData);
    this.closeWindow();
  }

}
