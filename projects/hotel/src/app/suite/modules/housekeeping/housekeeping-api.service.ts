import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HousekeepingApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all housekeeping belonging to user

  public getAllHousekeeping(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-housekeeping/housekeeping-list?user=" + sessionStorage.getItem('hotel_id'));
  }

  public postHousekeeping(housekeeping): Observable<any>{
    return this.http.post(this.hotelUrl + "module-housekeeping/housekeeping/", housekeeping);
  }

  // retreive, update and delete housekeeping

  public getSingleHousekeeping(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-housekeeping/housekeeping/" + sessionStorage.getItem('housekeeping_id'));
  }

  public putHousekeeping(housekeeping): Observable<any>{
    return this.http.put(this.hotelUrl + "module-housekeeping/housekeeping/" + sessionStorage.getItem('housekeeping_id'), housekeeping);
  }

  public deleteHousekeeping(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-housekeeping/housekeeping/" + sessionStorage.getItem('housekeeping_id'));
  }

  // ----------------------------------------------------------------------------------------------------------------------------------------------------

  // create and get all housekeeping belonging to user

  public getAllChecklist(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-housekeeping/checklist-list?user=" + sessionStorage.getItem('housekeeping_id'));
  }

  public postChecklist(checklist): Observable<any>{
    return this.http.post(this.hotelUrl + "module-housekeeping/checklist/", checklist);
  }

  // retreive, update and delete housekeeping

  public getSingleChecklist(checklistId): Observable<any>{
    return this.http.get(this.hotelUrl + "module-housekeeping/checklist/" + checklistId);
  }

  public putChecklist(checklist, checklistId): Observable<any>{
    return this.http.put(this.hotelUrl + "module-housekeeping/checklist/" + checklistId, checklist);
  }

  public deleteChecklist(checklistId): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-housekeeping/checklist/" + checklistId);
  }

}
