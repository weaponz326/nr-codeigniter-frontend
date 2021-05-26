import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CommitteesApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all committees belonging to account

  public getCommittees(): Observable<any>{
    return this.http.get(this.associationUrl + "module-committees/committee?account=" + sessionStorage.getItem('association_id'));
  }

  public postCommittee(committee): Observable<any>{
    return this.http.post(this.associationUrl + "module-committees/committee/", committee);
  }

  // retreive, update and delete committee

  public getSingleCommittee(): Observable<any>{
    return this.http.get(this.associationUrl + "module-committees/committee/" + sessionStorage.getItem('committee_id'));
  }

  public putCommittee(committee): Observable<any>{
    return this.http.put(this.associationUrl + "module-committees/committee/" + sessionStorage.getItem('committee_id'), committee);
  }

  public deleteCommittee(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-committees/committee/" + sessionStorage.getItem('committee_id'));
  }

  // ---------------------------------------------------------------------------------------------------------------------
  // committee members

  public getCommitteeMembers(): Observable<any>{
    return this.http.get(this.associationUrl + "module-committees/committee-member?committee=" + sessionStorage.getItem('committee_id'));
  }

  public postCommitteeMember(member): Observable<any>{
    return this.http.post(this.associationUrl + "module-committees/committe-emember/", member);
  }

  // retreive, update and delete committee

  public putCommitteeMember(memberId, memberData): Observable<any>{
    return this.http.put(this.associationUrl + "module-committees/committee-member/" + memberId, memberData);
  }

  public deleteCommitteeMember(memberId): Observable<any>{
    return this.http.delete(this.associationUrl + "module-committees/committee-member/" + memberId);
  }

}
