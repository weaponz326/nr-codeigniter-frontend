import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ProductsApiService } from '../products-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { ProductFormComponent } from '../product-form/product-form.component';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(
    private router: Router,
    private productsApi: ProductsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('productFormComponentReference') productForm: ProductFormComponent;

  navHeading: any[] = [
    { text: "New Product", url: "/suite/products/new-product" },
  ];

  ngOnInit(): void {
  }

  saveProduct(){
    console.log('u are saving a new product');
    this.loadingSpinner.httpLoader.open();

    var productData = {
      account: sessionStorage.getItem('production_id'),
      product_code: this.productForm.productCode.val(),
      product_name: this.productForm.productName.val(),
      product_type: this.productForm.productType.val(),
      description: this.productForm.description.val(),
      version: this.productForm.version.val(),
      model_number: this.productForm.modelNumber.val(),
    }

    console.log(productData);

    this.productsApi.postProduct(productData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('product_id', res.data.id);
            this.router.navigateByUrl('/suite/products/view-product');
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
