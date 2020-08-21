import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/personal/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  personalUrl = environment.personalUrl;

  constructor(private http: HttpClient) { }

  // retreive, create and update subject

  public getSubject(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/subject?note_id=" + sessionStorage.getItem('note_id'));
  }

  public postSubject(subject): Observable<any>{
    return this.http.post(this.personalUrl + "module-notes/subject/", subject);
  }

  public putSubject(subject): Observable<any>{
    return this.http.put(this.personalUrl + "module-notes/subject/", subject);
  }

  // retreive, create and update body

  public getBody(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/body?note_id=" + sessionStorage.getItem('note_id'));
  }

  public postBody(body): Observable<any>{
    return this.http.post(this.personalUrl + "module-notes/body/", body);
  }

  public putBody(body): Observable<any>{
    return this.http.put(this.personalUrl + "module-notes/body/", body);
  }

  // get all notes belonging to a user
  public getNotes(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note-list?user=" + localStorage.getItem('personal_id'));
  }

}
