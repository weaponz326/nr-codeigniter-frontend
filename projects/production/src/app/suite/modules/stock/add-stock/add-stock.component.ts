import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { StockFormComponent } from '../stock-form/stock-form.component'


@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  @ViewChild("addStockReference") addStock: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("stockFormComponentReference") stockForm: StockFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addStock.open();
  }

  closeWindow(){
    this.addStock.close();
  }

  saveStock(){
    var stockData = {
      account: sessionStorage.getItem('production_id'),
      location: this.stockForm.location.val(),
      container: this.stockForm.container.val(),
      bin_number: this.stockForm.binNumber.val(),
      quantity: this.stockForm.quantity.val(),
    }

    console.log(stockData);

    this.addCommit.emit(stockData);
    this.closeWindow();
  }

}
