import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainNavbarApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  personalUrl = environment.personalUrl;
  hospitalUrl = environment.hospitalUrl;
  restaurantUrl = environment.restaurantUrl;
  schoolUrl = environment.schoolUrl;
  enterpriseUrl = environment.enterpriseUrl;
  hotelUrl = environment.hotelUrl;
  shopUrl = environment.shopUrl;
  productionUrl = environment.productionUrl;

  token = "Token " + localStorage.getItem('token');

  headers = new HttpHeaders()
    .set('Authorization', this.token);

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
    return this.http.get(this.hospitalUrl + "accounts/active-account")
  }

  public checkActiveRestaurant(): Observable<any>{
    return this.http.get(this.restaurantUrl + "accounts/active-account")
  }

  public checkActiveSchool(): Observable<any>{
    return this.http.get(this.schoolUrl + "accounts/active-account")
  }

  public checkActiveEnterprise(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "accounts/active-account")
  }

  public checkActiveHotel(): Observable<any>{
    return this.http.get(this.hotelUrl + "accounts/active-account")
  }

  public checkActiveShop(): Observable<any>{
    return this.http.get(this.shopUrl + "accounts/active-account")
  }

  public checkActiveProduction(): Observable<any>{
    return this.http.get(this.productionUrl + "accounts/active-account")
  }

}