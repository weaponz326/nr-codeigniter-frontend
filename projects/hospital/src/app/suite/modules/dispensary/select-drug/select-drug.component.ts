import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DispensaryApiService } from '../dispensary-api.service';


@Component({
  selector: 'app-select-drug',
  templateUrl: './select-drug.component.html',
  styleUrls: ['./select-drug.component.css']
})
export class SelectDrugComponent implements OnInit {

  constructor(private dispensaryApi: DispensaryApiService) { }

  @ViewChild("selectDrugWindowReference") selectDrugWindow: jqxWindowComponent;
  @ViewChild("selectDrugGridReference") selectDrugGrid: jqxGridComponent;

  @Output() drugEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.selectDrugGrid.showloadelement();
    this.getData();
  }

  openWindow(){
    this.selectDrugWindow.open();
  }

  selectDrug(event: any){
    console.log("u have double clicked a drug");
    this.drugEvent.emit(event.args.row.bounddata);
    this.selectDrugWindow.close();
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  getData(){
    this.dispensaryApi.getDrugs()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.selectDrugGrid.updatebounddata();
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
      { name: 'drug_name', type: 'string' },
      { name: 'ndc_number', type: 'string' },
      { name: 'category', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "NDC No.", dataField: "ndc_number", width: "25%" },
    { text: "Drug Name", dataField: "drug_name", width: "50%" },
    { text: "Category", dataField: "category", width: "25%" },
  ];

}
