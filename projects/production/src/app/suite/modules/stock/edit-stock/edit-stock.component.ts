import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { StockFormComponent } from '../stock-form/stock-form.component'


@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {

  @ViewChild("editStockReference") editStock: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("stockFormComponentReference") stockForm: StockFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  stockId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editStock.open();

    console.log(event.args.row.bounddata);
    this.stockId = event.args.row.bounddata.id;

    this.stockForm.materialCode.val(event.args.row.bounddata.material_code);
    this.stockForm.materialName.val(event.args.row.bounddata.material_name);
    this.stockForm.location.val(event.args.row.bounddata.location);
    this.stockForm.container.val(event.args.row.bounddata.container);
    this.stockForm.binNumber.val(event.args.row.bounddata.bin_number);
    this.stockForm.quantity.val(event.args.row.bounddata.quantity);
  }

  closeWindow(){
    this.editStock.close();
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

    this.editCommit.emit(stockData);
    this.closeWindow();
  }

  deleteStock(){
    this.deleteCommit.emit(this.stockId);
    this.closeWindow()
  }

}
