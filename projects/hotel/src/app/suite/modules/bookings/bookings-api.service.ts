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

  // create and get all bookings belonging to account

  public getBookings(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-bookings/booking?account=" + sessionStorage.getItem('hotel_id'));
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

  // -----------------------------------------------------------------------------------------------------------------------
  // booked rooms

  public getBookedRooms(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-bookings/booked-room?booking=" + sessionStorage.getItem('booking_id'));
  }

  public postBookedRoom(service): Observable<any>{
    return this.http.post(this.hotelUrl + "module-bookings/booked-room/", service);
  }

  // retreive, update and delete service

  public getSingleBookedRoom(itemId): Observable<any>{
    return this.http.get(this.hotelUrl + "module-bookings/booked-room/" + itemId);
  }

  public putBookedRoom(itemId, item): Observable<any>{
    return this.http.put(this.hotelUrl + "module-bookings/booked-room/" + itemId, item);
  }

  public deleteBookedRoom(itemId): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-bookings/booked-room/" + itemId);
  }

}
