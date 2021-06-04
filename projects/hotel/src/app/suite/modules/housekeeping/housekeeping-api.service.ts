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

  // create and get all housekeeping belonging to account

  public getAllHouseKeeping(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-housekeeping/housekeeping?account=" + sessionStorage.getItem('hotel_id'));
  }

  public postHouseKeeping(housekeeping): Observable<any>{
    return this.http.post(this.hotelUrl + "module-housekeeping/housekeeping/", housekeeping);
  }

  // retreive, update and delete housekeeping

  public getSingleHouseKeeping(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-housekeeping/housekeeping/" + sessionStorage.getItem('housekeeping_id'));
  }

  public putHouseKeeping(housekeeping): Observable<any>{
    return this.http.put(this.hotelUrl + "module-housekeeping/housekeeping/" + sessionStorage.getItem('housekeeping_id'), housekeeping);
  }

  public deleteHouseKeeping(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-housekeeping/housekeeping/" + sessionStorage.getItem('housekeeping_id'));
  }

  // ----------------------------------------------------------------------------------------------------------------------------------------------------

  // create and get all housekeeping belonging to user

  public getAllChecklist(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-housekeeping/checklist?housekeeping=" + sessionStorage.getItem('housekeeping_id'));
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
