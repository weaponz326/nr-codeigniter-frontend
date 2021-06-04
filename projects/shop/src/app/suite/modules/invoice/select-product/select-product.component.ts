import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { InvoiceApiService } from '../invoice-api.service';


@Component({
  selector: 'app-select-product',
  templateUrl: './select-product.component.html',
  styleUrls: ['./select-product.component.css']
})
export class SelectProductComponent implements OnInit, AfterViewInit {

  constructor(private invoiceApi: InvoiceApiService) { }

  @ViewChild("selectProductWindowReference") selectProductWindow: jqxWindowComponent;
  @ViewChild("selectProductGridReference") selectProductGrid: jqxGridComponent;

  @Output() productEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectProductGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectProductWindow.open();
  }

  selectProduct(event: any){
    console.log("u have double clicked a menu item");
    this.productEvent.emit(event.args.row.bounddata);
    this.selectProductWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.invoiceApi.getProducts()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectProductGrid.updatebounddata();
        },
        err => {
          console.log(err);
        }
      )
  }

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'product_code', type: 'string' },
      { name: 'product_name', type: 'string' },
      { name: 'price', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Product ID", dataField: "product_code", width: "25%" },
    { text: "Product Name", dataField: "product_name", width: "50%" },
    { text: "Price", dataField: "price", width: "25%" },
  ];

}
