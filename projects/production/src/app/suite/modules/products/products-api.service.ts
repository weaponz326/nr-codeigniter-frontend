import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all products belonging to user

  public getProducts(): Observable<any>{
    return this.http.get(this.productionUrl + "module-products/product-list?user=" + sessionStorage.getItem('production_id'));
  }

  public postProduct(product): Observable<any>{
    return this.http.post(this.productionUrl + "module-products/product/", product);
  }

  // retreive, update and delete product

  public getSingleProduct(): Observable<any>{
    return this.http.get(this.productionUrl + "module-products/product/" + sessionStorage.getItem('product_id'));
  }

  public putProduct(product): Observable<any>{
    return this.http.put(this.productionUrl + "module-products/product/" + sessionStorage.getItem('product_id'), product);
  }

  public deleteProduct(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-products/product/" + sessionStorage.getItem('product_id'));
  }

}
