import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/restaurant/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private http: HttpClient) { }

  restaurantUrl = environment.restaurantUrl;
  personalUrl = environment.personalUrl;

  // get search results
  public getSearch(input: string): Observable<any>{
    return this.http.get(this.personalUrl + "users/search?search=" + input);
  }

  // get search detail of selected account
  public getDetail(account: string): Observable<any>{
    return this.http.get(this.personalUrl + "users/search/" + account);
  }

  // invitations

  public sendInvitation(invitation): Observable<any>{
    return this.http.post(this.restaurantUrl + "module-admin/invitation/", invitation);
  }

  public getInvitation(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/invitation/" + sessionStorage.getItem('invitation_id'));
  }

  public getAllInvitations(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/invitation?account=" + sessionStorage.getItem('restaurant_id'));
  }

  // users

  public getAllUsers(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/user?account=" + sessionStorage.getItem('restaurant_id'));
  }

  public getUser(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/user/" + sessionStorage.getItem('admin_user_id'));
  }

  public getUserAccess(): Observable<any>{
    return this.http.get(this.restaurantUrl + "module-admin/user-access/" + sessionStorage.getItem('admin_user_id'));
  }

  public putUser(user): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-admin/user/" + sessionStorage.getItem('admin_user_id'), user);
  }

  public putUserAccess(userAccess): Observable<any>{
    return this.http.put(this.restaurantUrl + "module-admin/user-access/" + sessionStorage.getItem('admin_user_id'), userAccess);
  }

}
