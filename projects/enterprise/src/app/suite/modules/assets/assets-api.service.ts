import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AssetsApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all assets belonging to user

  public getAssets(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-assets/asset-list?user=" + sessionStorage.getItem('enterprise_id'));
  }

  public postAsset(asset): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-assets/asset/", asset);
  }

  // retreive, update and delete asset

  public getSingleAsset(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-assets/asset/" + sessionStorage.getItem('asset_id'));
  }

  public putAsset(asset): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-assets/asset/" + sessionStorage.getItem('asset_id'), asset);
  }

  public deleteAsset(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-assets/asset/" + sessionStorage.getItem('asset_id'));
  }

}
