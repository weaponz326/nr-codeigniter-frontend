import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { EquipmentApiService } from '../equipment-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { EquipmentFormComponent } from '../equipment-form/equipment-form.component';


@Component({
  selector: 'app-view-equipment',
  templateUrl: './view-equipment.component.html',
  styleUrls: ['./view-equipment.component.css']
})
export class ViewEquipmentComponent implements OnInit {

  constructor(
    private router: Router,
    private equipmentApi: EquipmentApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('equipmentFormComponentReference') equipmentForm: EquipmentFormComponent;

  navHeading: any[] = [
    { text: "All Equipment", url: "/suite/equipment/all-equipment" },
    { text: "View Equipment", url: "/suite/equipment/view-equipment" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.equipmentApi.getSingleEquipment()
      .subscribe(
        res => {
          console.log(res);
          this.equipmentForm.equipmentCode.val(res.equipment_code);
          this.equipmentForm.equipmentName.val(res.equipment_name);
          this.equipmentForm.equipmentType.val(res.equipment_type);
          this.equipmentForm.category.val(res.category);
          this.equipmentForm.brand.val(res.brand);
          this.equipmentForm.model.val(res.model);
          this.equipmentForm.serialNumber.val(res.serial_number);
          this.equipmentForm.description.val(res.description);
          this.equipmentForm.location.val(res.location);
          this.equipmentForm.condition.val(res.condition);
          this.equipmentForm.equipmentStatus.val(res.equipmentStatus);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveEquipment(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a equipment");

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

    this.equipmentApi.putEquipment(equipmentData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(equipmentData);
  }

  deleteEquipment(){
    console.log("dude... u are gonna delete the equipment?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.equipmentApi.deleteEquipment()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/equipment/all-equipment');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
