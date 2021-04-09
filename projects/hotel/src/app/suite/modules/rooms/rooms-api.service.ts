import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RoomsApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all rooms belonging to user

  public getAllRooms(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-rooms/room-list?user=" + sessionStorage.getItem('hotel_id'));
  }

  public postRoom(room): Observable<any>{
    return this.http.post(this.hotelUrl + "module-rooms/room/", room);
  }

  // retreive, update and delete rooms

  public getSingleRoom(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-rooms/room/" + sessionStorage.getItem('room_id'));
  }

  public putRoom(room): Observable<any>{
    return this.http.put(this.hotelUrl + "module-rooms/room/" + sessionStorage.getItem('room_id'), room);
  }

  public deleteRoom(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-rooms/room/" + sessionStorage.getItem('room_id'));
  }

}
