import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/hotel/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AssetsApiService {

  constructor(private http: HttpClient) { }

  hotelUrl = environment.hotelUrl;

  // create and get all assets belonging to user

  public getAllAssets(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-assets/asset-list?user=" + sessionStorage.getItem('hotel_id'));
  }

  public postAsset(asset): Observable<any>{
    return this.http.post(this.hotelUrl + "module-assets/asset/", asset);
  }

  // retreive, update and delete assets

  public getSingleAsset(): Observable<any>{
    return this.http.get(this.hotelUrl + "module-assets/asset/" + sessionStorage.getItem('asset_id'));
  }

  public putAsset(asset): Observable<any>{
    return this.http.put(this.hotelUrl + "module-assets/asset/" + sessionStorage.getItem('asset_id'), asset);
  }

  public deleteAsset(): Observable<any>{
    return this.http.delete(this.hotelUrl + "module-assets/asset/" + sessionStorage.getItem('asset_id'));
  }

}
