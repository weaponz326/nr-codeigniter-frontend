import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InvoiceApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all invoice belonging to account

  public getInvoice(): Observable<any>{
    return this.http.get(this.shopUrl + "module-invoice/invoice?account=" + sessionStorage.getItem('shop_id'));
  }

  public postInvoice(invoice): Observable<any>{
    return this.http.post(this.shopUrl + "module-invoice/invoice/", invoice);
  }

  // retreive, update and delete invoice

  public getSingleInvoice(): Observable<any>{
    return this.http.get(this.shopUrl + "module-invoice/invoice/" + sessionStorage.getItem('invoice_id'));
  }

  public putInvoice(invoice): Observable<any>{
    return this.http.put(this.shopUrl + "module-invoice/invoice/" + sessionStorage.getItem('invoice_id'), invoice);
  }

  public deleteInvoice(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-invoice/invoice/" + sessionStorage.getItem('invoice_id'));
  }

  // get products for selection window
  public getProducts(): Observable<any>{
    return this.http.get(this.shopUrl + "module-products/product?account=" + sessionStorage.getItem('shop_id'));
  }

  // ---------------------------------------------------------------------------------------------------------------------
  // invoice items

  public getInvoiceItems(): Observable<any>{
    return this.http.get(this.shopUrl + "module-invoice/invoice-item?invoice=" + sessionStorage.getItem('invoice_id'));
  }

  public postInvoiceItem(item): Observable<any>{
    return this.http.post(this.shopUrl + "module-invoice/invoice-item/", item);
  }

  // retreive, update and delete invoice

  public getSingleInvoiceItem(itemId): Observable<any>{
    return this.http.get(this.shopUrl + "module-invoice/invoice-item/" + itemId);
  }

  public putInvoiceItem(itemId, item): Observable<any>{
    return this.http.put(this.shopUrl + "module-invoice/invoice-item/" + itemId, item);
  }

  public deleteInvoiceItem(itemId): Observable<any>{
    return this.http.delete(this.shopUrl + "module-invoice/invoice-item/" + itemId);
  }

}
