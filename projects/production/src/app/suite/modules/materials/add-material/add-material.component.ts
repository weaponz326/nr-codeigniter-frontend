import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { MaterialsApiService } from '../materials-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { MaterialFormComponent } from '../material-form/material-form.component';


@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  constructor(
    private router: Router,
    private materialsApi: MaterialsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('materialFormComponentReference') materialForm: MaterialFormComponent;

  navHeading: any[] = [
    { text: "Add Material", url: "/suite/materials/new-material" },
  ];

  ngOnInit(): void {
  }

  saveMaterial(){
    console.log('u are saving a new material');
    this.loadingSpinner.httpLoader.open();

    var materialData = {
      production_id: sessionStorage.getItem('production_id'),
      material_code: this.materialForm.materialCode.val(),
      material_name: this.materialForm.materialName.val(),
      category: this.materialForm.category.val(),
      description: this.materialForm.description.val(),
      unit_price: this.materialForm.unitPrice.val(),
      quantity: this.materialForm.materialName.val(),
    }

    console.log(materialData);

    this.materialsApi.postMaterial(materialData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('material_id', res.material_id);
            this.router.navigateByUrl('/suite/materials/view-material');
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
