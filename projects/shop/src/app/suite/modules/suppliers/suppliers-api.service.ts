import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SuppliersApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all suppliers belonging to account

  public getSuppliers(): Observable<any>{
    return this.http.get(this.shopUrl + "module-suppliers/supplier?account=" + sessionStorage.getItem('shop_id'));
  }

  public postSupplier(supplier): Observable<any>{
    return this.http.post(this.shopUrl + "module-suppliers/supplier/", supplier);
  }

  // retreive, update and delete supplier

  public getSingleSupplier(): Observable<any>{
    return this.http.get(this.shopUrl + "module-suppliers/supplier/" + sessionStorage.getItem('supplier_id'));
  }

  public putSupplier(supplier): Observable<any>{
    return this.http.put(this.shopUrl + "module-suppliers/supplier/" + sessionStorage.getItem('supplier_id'), supplier);
  }

  public deleteSupplier(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-suppliers/supplier/" + sessionStorage.getItem('supplier_id'));
  }

  // get product for slelction window
  public getProducts(): Observable<any>{
    return this.http.get(this.shopUrl + "module-products/product?account=" + sessionStorage.getItem('shop_id'));
  }

  // --------------------------------------------------------------------------------------------------------------------------------------------------------------
  // supplier products

  public getSupplierProducts(): Observable<any>{
    return this.http.get(this.shopUrl + "module-suppliers/supplier-product?supplier=" + sessionStorage.getItem('supplier_id'));
  }

  public postSupplierProduct(product): Observable<any>{
    return this.http.post(this.shopUrl + "module-suppliers/supplier-product/", product);
  }

  public deleteSupplierProduct(product): Observable<any>{
    return this.http.delete(this.shopUrl + "module-suppliers/supplier-product/" + product);
  }

}
