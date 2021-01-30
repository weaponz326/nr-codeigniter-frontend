import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hospital/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NursesApiService {

  constructor(private http: HttpClient) { }

  hospitalUrl = environment.hospitalUrl;

  // create and get all nurses belonging to user

  public getNurses(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-nurses/nurse-list?user=" + sessionStorage.getItem('hospital_id'));
  }

  public postNurse(nurse): Observable<any>{
    return this.http.post(this.hospitalUrl + "module-nurses/nurse/", nurse);
  }

  // retreive, update and delete nurse

  public getSingleNurse(): Observable<any>{
    return this.http.get(this.hospitalUrl + "module-nurses/nurse/" + sessionStorage.getItem('nurse_id'));
  }

  public putNurse(nurse): Observable<any>{
    return this.http.put(this.hospitalUrl + "module-nurses/nurse/" + sessionStorage.getItem('nurse_id'), nurse);
  }

  public deleteNurse(): Observable<any>{
    return this.http.delete(this.hospitalUrl + "module-nurses/nurse/" + sessionStorage.getItem('nurse_id'));
  }

}
