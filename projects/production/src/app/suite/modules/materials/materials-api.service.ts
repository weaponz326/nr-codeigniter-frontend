import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MaterialsApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all materials belonging to account

  public getMaterials(): Observable<any>{
    return this.http.get(this.productionUrl + "module-materials/material?account=" + sessionStorage.getItem('production_id'));
  }

  public postMaterial(material): Observable<any>{
    return this.http.post(this.productionUrl + "module-materials/material/", material);
  }

  // retreive, update and delete material

  public getSingleMaterial(): Observable<any>{
    return this.http.get(this.productionUrl + "module-materials/material/" + sessionStorage.getItem('material_id'));
  }

  public putMaterial(material): Observable<any>{
    return this.http.put(this.productionUrl + "module-materials/material/" + sessionStorage.getItem('material_id'), material);
  }

  public deleteMaterial(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-materials/material/" + sessionStorage.getItem('material_id'));
  }

}
