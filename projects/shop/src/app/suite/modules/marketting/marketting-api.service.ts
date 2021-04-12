import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/shop/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MarkettingApiService {

  constructor(private http: HttpClient) { }

  shopUrl = environment.shopUrl;

  // create and get all campaigns belonging to user

  public getCampaigns(): Observable<any>{
    return this.http.get(this.shopUrl + "module-marketting/campaign-list?user=" + sessionStorage.getItem('shop_id'));
  }

  public postCampaign(campaign): Observable<any>{
    return this.http.post(this.shopUrl + "module-marketting/campaign/", campaign);
  }

  // retreive, update and delete campaign

  public getSingleCampaign(): Observable<any>{
    return this.http.get(this.shopUrl + "module-marketting/campaign/" + sessionStorage.getItem('campaign_id'));
  }

  public putCampaign(campaign): Observable<any>{
    return this.http.put(this.shopUrl + "module-marketting/campaign/" + sessionStorage.getItem('campaign_id'), campaign);
  }

  public deleteCampaign(): Observable<any>{
    return this.http.delete(this.shopUrl + "module-marketting/campaign/" + sessionStorage.getItem('campaign_id'));
  }

}
