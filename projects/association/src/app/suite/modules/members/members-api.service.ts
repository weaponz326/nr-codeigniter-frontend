import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MembersApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all members belonging to account

  public getMembers(): Observable<any>{
    return this.http.get(this.associationUrl + "module-members/member?account=" + sessionStorage.getItem('association_id'));
  }

  public postMember(member): Observable<any>{
    return this.http.post(this.associationUrl + "module-members/member/", member);
  }

  // retreive, update and delete member

  public getSingleMember(): Observable<any>{
    return this.http.get(this.associationUrl + "module-members/member/" + sessionStorage.getItem('member_id'));
  }

  public putMember(member): Observable<any>{
    return this.http.put(this.associationUrl + "module-members/member/" + sessionStorage.getItem('member_id'), member);
  }

  public deleteMember(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-members/member/" + sessionStorage.getItem('member_id'));
  }

}
