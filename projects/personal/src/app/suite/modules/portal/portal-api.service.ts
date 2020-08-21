import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class PortalApiService {

  personalUrl = environment.personalUrl;

  constructor(private http: HttpClient) { }

  // create new budget
  public getSearch(input: string): Observable<any>{
    return this.http.get(this.personalUrl + "module-portal/search?search=" + input);
  }

}
