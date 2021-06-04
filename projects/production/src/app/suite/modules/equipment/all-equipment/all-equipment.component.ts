import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { EquipmentApiService } from '../equipment-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-equipment',
  templateUrl: './all-equipment.component.html',
  styleUrls: ['./all-equipment.component.css']
})
export class AllEquipmentComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private equipmentApi: EquipmentApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Equipment", url: "/suite/equipment/all-equipment" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.equipmentApi.getAllEquipment()
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

  viewEquipment(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('equipment_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/equipment/view-equipment');
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'equipment_code', type: 'string' },
      { name: 'equipment_name', type: 'string' },
      { name: 'equipment_type', type: 'string' },
      { name: 'condition', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Equipment ID", dataField: "equipment_code", width: "20%" },
    { text: "Equipment Name", dataField: "equipment_name", width: "35%" },
    { text: "Equipment Type", dataField: "equipment_type", width: "25%" },
    { text: "Condition", dataField: "condition", width: "20%" },
  ];

}
