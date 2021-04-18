import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ProductsApiService } from '../products-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { ProductFormComponent } from '../product-form/product-form.component';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(
    private router: Router,
    private productsApi: ProductsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('productFormComponentReference') productForm: ProductFormComponent;

  navHeading: any[] = [
    { text: "All Products", url: "/suite/products/all-products" },
    { text: "View Product", url: "/suite/products/view-product" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.productsApi.getSingleProduct()
      .subscribe(
        res => {
          console.log(res);
          this.productForm.productCode.val(res.product_code);
          this.productForm.productName.val(res.product_name);
          this.productForm.productType.val(res.product_type);
          this.productForm.description.val(res.description);
          this.productForm.version.val(res.version);
          this.productForm.modelNumber.val(res.model_number);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveProduct(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a product");

    var productData = {
      production_id: sessionStorage.getItem('production_id'),
      product_code: this.productForm.productCode.val(),
      product_name: this.productForm.productName.val(),
      product_type: this.productForm.productType.val(),
      description: this.productForm.description.val(),
      version: this.productForm.version.val(),
      model_number: this.productForm.modelNumber.val(),
    }

    this.productsApi.putProduct(productData)
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

    console.log(productData);
  }

  deleteProduct(){
    console.log("dude... u are gonna delete the product?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.productsApi.deleteProduct()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/product/all-product');
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
