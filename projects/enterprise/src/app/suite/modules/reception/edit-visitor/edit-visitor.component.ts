import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { VisitorFormComponent } from '../visitor-form/visitor-form.component'


@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent implements OnInit {

  constructor() { }

  @ViewChild("editVisitorReference") editVisitor: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("visitorFormComponentReference") visitorForm: VisitorFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  visitorId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editVisitor.open();

    console.log(event.args.row.bounddata);
    this.visitorId = event.args.row.bounddata.id;

    this.visitorForm.visitCode.val(event.args.row.bounddata.visit_code);
    this.visitorForm.visitDate.val(event.args.row.bounddata.visit_date);
    this.visitorForm.visitorName.val(event.args.row.bounddata.visitor_name);
    this.visitorForm.visitorPhone.val(event.args.row.bounddata.visitor_phone);
    this.visitorForm.arrival.val(event.args.row.bounddata.arrival);
    this.visitorForm.departure.val(event.args.row.bounddata.departure);
    this.visitorForm.purpose.val(event.args.row.bounddata.purpose);
    this.visitorForm.tagNumber.val(event.args.row.bounddata.tag_number);
  }

  closeWindow(){
    this.editVisitor.close();
  }

  saveVisitor(){
    var visitorData = {
      id: this.visitorId,
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
    this.editCommit.emit(visitorData);
    this.closeWindow();
  }

  deleteVisitor(){
    this.deleteCommit.emit(this.visitorId);
    this.closeWindow();
  }

}
