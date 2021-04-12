import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ProductsApiService } from '../products-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { ProductFormComponent } from '../product-form/product-form.component';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

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
    { text: "New Product", url: "/suite/products/add-product" },
  ];

  ngOnInit(): void {
  }

  saveProduct(){
    console.log('u are saving a new product');
    this.loadingSpinner.httpLoader.open();

    var productData = {
      shop_id: sessionStorage.getItem('shop_id'),
      product_code: this.productForm.productCode.val(),
      product_name: this.productForm.productName.val(),
      description: this.productForm.description.val(),
      location: this.productForm.location.val(),
      price: this.productForm.price.val(),
      stock: this.productForm.stock.val(),
    }

    console.log(productData);

    this.productsApi.postProduct(productData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('product_id', res.product_id);
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
