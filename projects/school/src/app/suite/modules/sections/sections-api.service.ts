import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/school/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SectionsApiService {

  constructor(private http: HttpClient) { }

  schoolUrl = environment.schoolUrl;

  // create and get all sections belonging to account

  public getSections(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-sections/section?account=" + sessionStorage.getItem('school_id'));
  }

  public postSection(section): Observable<any>{
    return this.http.post(this.schoolUrl + "module-sections/section/", section);
  }

  // retreive, update and delete section

  public getSingleSection(): Observable<any>{
    return this.http.get(this.schoolUrl + "module-sections/section/" + sessionStorage.getItem('section_id'));
  }

  public putSection(section): Observable<any>{
    return this.http.put(this.schoolUrl + "module-sections/section/" + sessionStorage.getItem('section_id'), section);
  }

  public deleteSection(): Observable<any>{
    return this.http.delete(this.schoolUrl + "module-sections/section/" + sessionStorage.getItem('section_id'));
  }

}
