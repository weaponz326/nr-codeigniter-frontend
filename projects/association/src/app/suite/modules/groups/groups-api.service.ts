import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupsApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all groups belonging to account

  public getGroups(): Observable<any>{
    return this.http.get(this.associationUrl + "module-groups/group?account=" + sessionStorage.getItem('association_id'));
  }

  public postGroup(group): Observable<any>{
    return this.http.post(this.associationUrl + "module-groups/group/", group);
  }

  // retreive, update and delete group

  public getSingleGroup(): Observable<any>{
    return this.http.get(this.associationUrl + "module-groups/group/" + sessionStorage.getItem('group_id'));
  }

  public putGroup(group): Observable<any>{
    return this.http.put(this.associationUrl + "module-groups/group/" + sessionStorage.getItem('group_id'), group);
  }

  public deleteGroup(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-groups/group/" + sessionStorage.getItem('group_id'));
  }

  // ---------------------------------------------------------------------------------------------------------------------
  // group members

  public getGroupMembers(): Observable<any>{
    return this.http.get(this.associationUrl + "module-groups/group-member?group=" + sessionStorage.getItem('group_id'));
  }

  public postGroupMember(member): Observable<any>{
    return this.http.post(this.associationUrl + "module-groups/committe-emember/", member);
  }

  // retreive, update and delete group

  public putGroupMember(memberId, memberData): Observable<any>{
    return this.http.put(this.associationUrl + "module-groups/group-member/" + memberId, memberData);
  }

  public deleteGroupMember(memberId): Observable<any>{
    return this.http.delete(this.associationUrl + "module-groups/group-member/" + memberId);
  }

}
