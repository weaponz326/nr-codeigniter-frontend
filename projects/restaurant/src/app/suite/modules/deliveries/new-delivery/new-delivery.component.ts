import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-new-delivery',
  templateUrl: './new-delivery.component.html',
  styleUrls: ['./new-delivery.component.css']
})
export class NewDeliveryComponent implements OnInit {

  constructor() { }

  @ViewChild("newDeliveryReference") newDelivery: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  openWindow(){
    this.newDelivery.open();
  }

  ngOnInit(): void {
  }

}
