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

  // get all notes and belonging to a user
  public getNotes(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note?user=" + localStorage.getItem('personal_id'));
  }

  // get single note and its attachments

  public getNote(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/note/" + sessionStorage.getItem('note_id'));
  }

  public getFiles(): Observable<any>{
    return this.http.get(this.personalUrl + "module-notes/file?note=" + sessionStorage.getItem('note_id'));
  }

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

  public postFile(file): Observable<any>{
    return this.http.post(this.personalUrl + "module-notes/file/", file);
  }

  public deleteFile(fileId): Observable<any>{
    return this.http.delete(this.personalUrl + "module-notes/file/" + fileId);
  }

}
