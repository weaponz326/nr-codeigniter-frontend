import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GuestsApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all guests belonging to user

  public getAllGuests(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-guests/guest-list?user=" + sessionStorage.getItem('hotel_id'));
  }

  public postGuest(guest): Observable<any>{
    return this.http.post(this.hotelUrl + "module-guests/guest/", guest);
  }

  // retreive, update and delete guests

  public getSingleGuest(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-guests/guest/" + sessionStorage.getItem('guest_id'));
  }

  public putGuest(guest): Observable<any>{
    return this.http.put(this.hotelUrl + "module-guests/guest/" + sessionStorage.getItem('guest_id'), guest);
  }

  public deleteGuest(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-guests/guest/" + sessionStorage.getItem('guest_id'));
  }

}
