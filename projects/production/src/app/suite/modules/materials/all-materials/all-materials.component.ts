import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { MaterialsApiService } from '../materials-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-materials',
  templateUrl: './all-materials.component.html',
  styleUrls: ['./all-materials.component.css']
})
export class AllMaterialsComponent implements OnInit {

  constructor(
    private router: Router,
    private materialsApi: MaterialsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Materials", url: "/suite/materials/all-materials" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.materialsApi.getMaterials()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  viewMaterial(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('material_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/materials/view-material');
  }

  // widgets
  // -----------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'material_code', type: 'string' },
      { name: 'material_name', type: 'string' },
      { name: 'category', type: 'string' },
      { name: 'quantity', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Material ID", dataField: "material_code", width: "20%" },
    { text: "Material Name", dataField: "material_name", width: "40%" },
    { text: "Category", dataField: "category", width: "25%" },
    { text: "quantity", dataField: "quantity", width: "15%" },
  ];

}
