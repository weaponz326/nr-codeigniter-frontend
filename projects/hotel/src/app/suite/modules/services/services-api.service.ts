import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicesApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all services belonging to account

  public getServices(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-services/service?account=" + sessionStorage.getItem('hotel_id'));
  }

  public postService(service): Observable<any>{
    return this.http.post(this.hotelUrl + "module-services/service/", service);
  }

  // retreive, update and delete service

  public getSingleService(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-services/service/" + sessionStorage.getItem('service_id'));
  }

  public putService(service): Observable<any>{
    return this.http.put(this.hotelUrl + "module-services/service/" + sessionStorage.getItem('service_id'), service);
  }

  public deleteService(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-services/service/" + sessionStorage.getItem('service_id'));
  }

  // guests for selection window
  public getGuests(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-guests/guest?account=" + sessionStorage.getItem('hotel_id'));
  }

  // -----------------------------------------------------------------------------------------------------------------------
  // service items

  public getServiceItems(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-services/service-item?account=" + sessionStorage.getItem('service_id'));
  }

  public postServiceItem(service): Observable<any>{
    return this.http.post(this.hotelUrl + "module-services/service-item/", service);
  }

  // retreive, update and delete service

  public getSingleServiceItem(itemId): Observable<any>{
    return this.http.get(this.hotelUrl + "module-services/service-item/" + itemId);
  }

  public putServiceItem(itemId, item): Observable<any>{
    return this.http.put(this.hotelUrl + "module-services/service-item/" + itemId, item);
  }

  public deleteServiceItem(itemId): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-services/service-item/" + itemId);
  }

}
