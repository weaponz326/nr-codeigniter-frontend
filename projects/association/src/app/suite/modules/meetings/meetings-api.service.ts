import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingsApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all meetings belonging to account

  public getMeetings(): Observable<any>{
    return this.http.get(this.associationUrl + "module-meetings/meeting?account=" + sessionStorage.getItem('association_id'));
  }

  public postMeeting(meeting): Observable<any>{
    return this.http.post(this.associationUrl + "module-meetings/meeting/", meeting);
  }

  // retreive, update and delete meeting

  public getSingleMeeting(): Observable<any>{
    return this.http.get(this.associationUrl + "module-meetings/meeting/" + sessionStorage.getItem('meeting_id'));
  }

  public putMeeting(meeting): Observable<any>{
    return this.http.put(this.associationUrl + "module-meetings/meeting/" + sessionStorage.getItem('meeting_id'), meeting);
  }

  public deleteMeeting(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-meetings/meeting/" + sessionStorage.getItem('meeting_id'));
  }

}
