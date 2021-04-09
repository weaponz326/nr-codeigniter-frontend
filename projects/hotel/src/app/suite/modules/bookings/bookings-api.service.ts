import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookingsApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all bookings belonging to user

  public getBookings(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-bookings/booking-list?user=" + sessionStorage.getItem('hotel_id'));
  }

  public postBooking(booking): Observable<any>{
    return this.http.post(this.hotelUrl + "module-bookings/booking/", booking);
  }

  // retreive, update and delete booking

  public getSingleBooking(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-bookings/booking/" + sessionStorage.getItem('booking_id'));
  }

  public putBooking(booking): Observable<any>{
    return this.http.put(this.hotelUrl + "module-bookings/booking/" + sessionStorage.getItem('booking_id'), booking);
  }

  public deleteBooking(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-bookings/booking/" + sessionStorage.getItem('booking_id'));
  }

}
