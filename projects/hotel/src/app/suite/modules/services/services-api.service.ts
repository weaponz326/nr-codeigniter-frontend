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

  // create and get all services belonging to user

  public getServices(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-services/service-list?user=" + sessionStorage.getItem('hotel_id'));
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

}
