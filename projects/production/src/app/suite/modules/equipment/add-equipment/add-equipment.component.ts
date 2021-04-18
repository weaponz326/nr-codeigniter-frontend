import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { EquipmentApiService } from '../equipment-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { EquipmentFormComponent } from '../equipment-form/equipment-form.component';


@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  constructor(
    private router: Router,
    private equipmentApi: EquipmentApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('equipmentFormComponentReference') equipmentForm: EquipmentFormComponent;

  navHeading: any[] = [
    { text: "New Equipment", url: "/suite/equipment/add-equipment" },
  ];

  ngOnInit(): void {
  }

  saveEquipment(){
    console.log('u are saving a new equipment');
    this.loadingSpinner.httpLoader.open();

    var equipmentData = {
      production_id: sessionStorage.getItem('production_id'),
      equipment_code: this.equipmentForm.equipmentCode.val(),
      equipment_name: this.equipmentForm.equipmentName.val(),
      equipment_type: this.equipmentForm.equipmentType.val(),
      category: this.equipmentForm.category.val(),
      brand: this.equipmentForm.brand.val(),
      model: this.equipmentForm.model.val(),
      serial_number: this.equipmentForm.serialNumber.val(),
      description: this.equipmentForm.description.val(),
      location: this.equipmentForm.location.val(),
      condition: this.equipmentForm.condition.val(),
      equipment_status: this.equipmentForm.equipmentStatus.val(),
    }

    console.log(equipmentData);

    this.equipmentApi.postEquipment(equipmentData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('equipment_id', res.equipment_id);
            this.router.navigateByUrl('/suite/equipment/view-equipment');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
