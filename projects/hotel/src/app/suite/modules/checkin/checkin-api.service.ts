import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CheckinApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all checkins belonging to user

  public getAllCheckin(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-checkin/checkin-list?user=" + sessionStorage.getItem('hotel_id'));
  }

  public postCheckin(checkin): Observable<any>{
    return this.http.post(this.hotelUrl + "module-checkin/checkin/", checkin);
  }

  // retreive, update and delete checkins

  public getSingleCheckin(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-checkin/checkin/" + sessionStorage.getItem('checkin_id'));
  }

  public putCheckin(checkin): Observable<any>{
    return this.http.put(this.hotelUrl + "module-checkin/checkin/" + sessionStorage.getItem('checkin_id'), checkin);
  }

  public deleteCheckin(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-checkin/checkin/" + sessionStorage.getItem('checkin_id'));
  }

}
