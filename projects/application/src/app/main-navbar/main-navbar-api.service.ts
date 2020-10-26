import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainNavbarApiService {

  baseUrl = environment.baseUrl;
  personalUrl = environment.personalUrl;
  hospitalUrl = environment.hospitalUrl;
  restaurantUrl = environment.restaurantUrl;
  schoolUrl = environment.schoolUrl;
  enterpriseUrl = environment.enterpriseUrl;
  hotelUrl = environment.hotelUrl;
  shopUrl = environment.shopUrl;
  productionUrl = environment.productionUrl;

  headers = new HttpHeaders()
    .set('Authorization', "Token " + localStorage.getItem('token'));

  constructor(private http: HttpClient) { }

  public postSource(source): Observable<any>{
    return this.http.post(this.baseUrl + "main/user-source/", { "user_source": source }, { withCredentials: true });
  }

  public getSource(): Observable<any>{
    return this.http.get(this.baseUrl + "main/user-source/", { withCredentials: true });
  }

  public getUser(): Observable<any>{
    return this.http.get(this.personalUrl + "users/login-status/", { 'headers': this.headers });
  }

  public postLogout(): Observable<any>{
    return this.http.post(this.personalUrl + "users/rest-auth/logout/", {});
  }

  // check if user has any active suite session

  public checkActiveHospital(): Observable<any>{
    return this.http.get(this.hospitalUrl + "accounts/active-account/", { withCredentials: true })
  }

  public checkActiveRestaurant(): Observable<any>{
    return this.http.get(this.restaurantUrl + "accounts/active-account/", { withCredentials: true })
  }

  public checkActiveSchool(): Observable<any>{
    return this.http.get(this.schoolUrl + "accounts/active-account/", { withCredentials: true })
  }

  public checkActiveEnterprise(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "accounts/active-account/", { withCredentials: true })
  }

  public checkActiveHotel(): Observable<any>{
    return this.http.get(this.hotelUrl + "accounts/active-account/", { withCredentials: true })
  }

  public checkActiveShop(): Observable<any>{
    return this.http.get(this.shopUrl + "accounts/active-account/", { withCredentials: true })
  }

  public checkActiveProduction(): Observable<any>{
    return this.http.get(this.productionUrl + "accounts/active-account/", { withCredentials: true })
  }

}
