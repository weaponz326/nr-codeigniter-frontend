import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/personal/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NotesApiService {

  constructor(private http: HttpClient) { }

  personalUrl = environment.personalUrl;

  // create, update and delete note

  public postNote(note): Observable<any>{
    return this.http.post(this.personalUrl + "module-notes/note/", note);
  }

  public putNote(note): Observable<any>{
    return this.http.put(this.personalUrl + "module-notes/note/"  + sessionStorage.getItem('note_id'), note);
  }

  public deleteNote(): Observable<any>{
    return this.http.delete(this.personalUrl + "module-notes/note/" + sessionStorage.getItem('note_id'));
  }

  // retreive and update subject

  public getSubject(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/subject?note_id=" + sessionStorage.getItem('note_id'));
  }

  public putSubject(subject): Observable<any>{
    return this.http.put(this.personalUrl + "module-notes/subject/", subject);
  }

  // retreive and update body

  public getBody(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/body?note_id=" + sessionStorage.getItem('note_id'));
  }

  public putBody(body): Observable<any>{
    return this.http.put(this.personalUrl + "module-notes/body/", body);
  }

  // get all notes belonging to a user
  public getNotes(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note-list?user=" + localStorage.getItem('personal_id'));
  }

}
