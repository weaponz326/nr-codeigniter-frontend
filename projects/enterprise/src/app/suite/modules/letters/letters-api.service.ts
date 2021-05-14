import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LettersApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all received belonging to account

  public getAllReceived(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-letters/received?account=" + sessionStorage.getItem('enterprise_id'));
  }

  public postReceived(received): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-letters/received/", received);
  }

  // retreive, update and delete received

  public getSingleReceived(receivedId): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-letters/received/" + receivedId);
  }

  public putReceived(received, receivedId): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-letters/received/" + receivedId, received);
  }

  public deleteReceived(receivedId): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-letters/received/" + receivedId);
  }

  // -----------------------------------------------------------------------------------------------------------

  // create and get all received belonging to account

  public getAllSent(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-letters/sent?account=" + sessionStorage.getItem('enterprise_id'));
  }

  public postSent(sent): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-letters/sent/", sent);
  }

  // retreive, update and delete sent

  public getSingleSent(sentId): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-letters/sent/" + sentId);
  }

  public putSent(sent, sentId): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-letters/sent/" + sentId, sent);
  }

  public deleteSent(sentId): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-letters/sent/" + sentId);
  }

}
