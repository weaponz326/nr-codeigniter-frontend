import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SittingsApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all sittings belonging to user

  public getSittings(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-sittings/sitting-list?user=" + sessionStorage.getItem('restaurant_id'));
  }

  public postSitting(sitting): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-sittings/sitting/", sitting);
  }

  // retreive, update and delete sitting

  public getSingleSitting(appoitmentId): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-sittings/sitting/" + appoitmentId);
  }

  public putSitting(sitting, appoitmentId): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-sittings/sitting/" + appoitmentId, sitting);
  }

  public deleteSitting(sittingId): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-sittings/sitting/" + sittingId);
  }

}
