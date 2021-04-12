import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all products belonging to user

  public getProducts(): Observable<any>{
    return this.http.get(this.shopUrl + "module-products/product-list?user=" + sessionStorage.getItem('shop_id'));
  }

  public postProduct(product): Observable<any>{
    return this.http.post(this.shopUrl + "module-products/product/", product);
  }

  // retreive, update and delete product

  public getSingleProduct(): Observable<any>{
    return this.http.get(this.shopUrl + "module-products/product/" + sessionStorage.getItem('product_id'));
  }

  public putProduct(product): Observable<any>{
    return this.http.put(this.shopUrl + "module-products/product/" + sessionStorage.getItem('product_id'), product);
  }

  public deleteProduct(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-products/product/" + sessionStorage.getItem('product_id'));
  }

}
