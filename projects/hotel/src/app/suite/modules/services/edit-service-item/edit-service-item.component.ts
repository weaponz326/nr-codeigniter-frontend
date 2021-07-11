import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';


@Component({
  selector: 'app-edit-service-item',
  templateUrl: './edit-service-item.component.html',
  styleUrls: ['./edit-service-item.component.css']
})
export class EditServiceItemComponent implements OnInit {

  constructor() { }

  @ViewChild("editServiceReference") editService: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild("itemDateReference") itemDate: jqxDateTimeInputComponent;
  @ViewChild("descriptionReference") description: jqxTextAreaComponent;
  @ViewChild("amountReference") amount: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  itemId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editService.open();
    this.itemId = event.args.row.bounddata.id;

    console.log(event.args.row.bounddata);

    this.itemDate.val(event.args.row.bounddata.item_date);
    this.description.val(event.args.row.bounddata.description);
    this.amount.val(event.args.row.bounddata.amount);
  }

  closeWindow(){
    this.editService.close();
  }

  saveService(){
    var serviceData = {
      id: this.itemId,
      account: sessionStorage.getItem('hotel_id'),
      item_date: this.itemDate.val(),
      description: this.description.val(),
      amount: this.amount.val(),
    }

    console.log(serviceData);
    this.editCommit.emit(serviceData);

    this.closeWindow();
  }

  deleteService(){
    this.deleteCommit.emit(this.itemId);
    this.closeWindow();
  }

}
