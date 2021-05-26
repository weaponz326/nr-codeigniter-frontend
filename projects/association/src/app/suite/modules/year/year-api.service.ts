import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class YearApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all years belonging to account

  public getAllYears(): Observable<any>{
    return this.http.get(this.associationUrl + "module-year/year?account=" + sessionStorage.getItem('association_id'));
  }

  public postYear(year): Observable<any>{
    return this.http.post(this.associationUrl + "module-year/year/", year);
  }

  // retreive, update and delete year

  public getSingleYear(): Observable<any>{
    return this.http.get(this.associationUrl + "module-year/year/" + sessionStorage.getItem('year_id'));
  }

  public putYear(year): Observable<any>{
    return this.http.put(this.associationUrl + "module-year/year/" + sessionStorage.getItem('year_id'), year);
  }

  public deleteYear(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-year/year/" + sessionStorage.getItem('year_id'));
  }

}
