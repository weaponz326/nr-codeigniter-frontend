import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MaterialsApiService } from '../materials-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { MaterialFormComponent } from '../material-form/material-form.component';


@Component({
  selector: 'app-view-material',
  templateUrl: './view-material.component.html',
  styleUrls: ['./view-material.component.css']
})
export class ViewMaterialComponent implements OnInit {

  constructor(
    private router: Router,
    private materialsApi: MaterialsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('materialFormComponentReference') materialForm: MaterialFormComponent;

  navHeading: any[] = [
    { text: "All Materials", url: "/suite/materials/all-materials" },
    { text: "View Material", url: "/suite/materials/view-material" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.materialsApi.getSingleMaterial()
      .subscribe(
        res => {
          console.log(res);
          this.materialForm.materialCode.val(res.material_code);
          this.materialForm.materialName.val(res.material_name);
          this.materialForm.category.val(res.category);
          this.materialForm.description.val(res.description);
          this.materialForm.unitPrice.val(res.unit_price);
          this.materialForm.quantity.val(res.quantity);
          this.materialForm.totalPrice.val(res.total_price);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveMaterial(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a material");

    var materialData = {
      production_id: sessionStorage.getItem('production_id'),
      material_code: this.materialForm.materialCode.val(),
      material_name: this.materialForm.materialName.val(),
      category: this.materialForm.category.val(),
      description: this.materialForm.description.val(),
      unit_price: this.materialForm.unitPrice.val(),
      quantity: this.materialForm.materialName.val(),
    }

    this.materialsApi.putMaterial(materialData)
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

    console.log(materialData);
  }

  deleteMaterial(){
    console.log("dude... u are gonna delete the material?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.materialsApi.deleteMaterial()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/material/all-material');
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
