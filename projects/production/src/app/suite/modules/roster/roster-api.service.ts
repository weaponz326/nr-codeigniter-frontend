import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RosterApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all roster belonging to user

  public getRoster(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/roster?account=" + sessionStorage.getItem('production_id'));
  }

  public postRoster(roster): Observable<any>{
    return this.http.post(this.productionUrl + "module-roster/roster/", roster);
  }

  // retreive, update and delete roster

  public getSingleRoster(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/roster/" + sessionStorage.getItem('roster_id'));
  }

  public putRoster(roster): Observable<any>{
    return this.http.put(this.productionUrl + "module-roster/roster/" + sessionStorage.getItem('roster_id'), roster);
  }

  public deleteRoster(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-roster/roster/" + sessionStorage.getItem('roster_id'));
  }

  // ------------------------------------------------------------------------------------------------------------
  // shifts

  public getShifts(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/shift?roster=" + sessionStorage.getItem('roster_id'));
  }

  public postShift(shift): Observable<any>{
    return this.http.post(this.productionUrl + "module-roster/shift/", shift);
  }

  public putShift(shiftId, shift): Observable<any>{
    return this.http.put(this.productionUrl + "module-roster/shift/" + shiftId, shift);
  }

  public deleteShift(shiftId): Observable<any>{
    return this.http.delete(this.productionUrl + "module-roster/shift/" + shiftId);
  }

  // ------------------------------------------------------------------------------------------------------------
  // batches

  public getBatches(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/batch?roster=" + sessionStorage.getItem('roster_id'));
  }

  public postBatch(batch): Observable<any>{
    return this.http.post(this.productionUrl + "module-roster/batch/", batch);
  }

  public putBatch(batchId, batch): Observable<any>{
    return this.http.put(this.productionUrl + "module-roster/batch/" + batchId, batch);
  }

  public deleteBatch(batchId): Observable<any>{
    return this.http.delete(this.productionUrl + "module-roster/batch/" + batchId);
  }

  public getPersonnel(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/personnel?roster=" + sessionStorage.getItem('roster_id'));
  }

  public putPersonnel(personnelId, personnel): Observable<any>{
    return this.http.put(this.productionUrl + "module-roster/personnel/" + personnelId, personnel);
  }

  public refreshPersonnel(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/refresh-personnel?roster=" + sessionStorage.getItem('roster_id'));
  }

  // ---------------------------------------------------------------------------------------------------------------------
  // sheet

  public refreshSheet(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/refresh-sheet?roster=" + sessionStorage.getItem('roster_id'));
  }

  public getRosterDays(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/roster-day?roster=" + sessionStorage.getItem('roster_id'));
  }

  public getRosterSheet(): Observable<any>{
    return this.http.get(this.productionUrl + "module-roster/roster-sheet?roster=" + sessionStorage.getItem('roster_id'));
  }

  public postRosterSheet(sheet): Observable<any>{
    return this.http.post(this.productionUrl + "module-roster/roster-sheet/", sheet);
  }

}
