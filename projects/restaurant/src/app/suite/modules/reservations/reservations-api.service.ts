import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/restaurant/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ReservationsApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;

  // create and get all reservations belonging to account

  public getReservations(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-reservations/reservation?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public postReservation(reservation): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-reservations/reservation/", reservation);
  }

  // retreive, update and delete reservation

  public getSingleReservation(reservationId): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-reservations/reservation/" + reservationId);
  }

  public putReservation(reservationId, reservationData): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-reservations/reservation/" + reservationId, reservationData);
  }

  public deleteReservation(reservationId): Observable<any>{
    return this.http.delete(this.restaurantUrl + "module-reservations/reservation/" + reservationId);
  }

}
