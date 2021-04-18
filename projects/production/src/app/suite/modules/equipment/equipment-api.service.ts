import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EquipmentApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all equipment belonging to user

  public getAllEquipment(): Observable<any>{
    return this.http.get(this.productionUrl + "module-equipment/equipment-list?user=" + sessionStorage.getItem('production_id'));
  }

  public postEquipment(equipment): Observable<any>{
    return this.http.post(this.productionUrl + "module-equipment/equipment/", equipment);
  }

  // retreive, update and delete equipment

  public getSingleEquipment(): Observable<any>{
    return this.http.get(this.productionUrl + "module-equipment/equipment/" + sessionStorage.getItem('equipment_id'));
  }

  public putEquipment(equipment): Observable<any>{
    return this.http.put(this.productionUrl + "module-equipment/equipment/" + sessionStorage.getItem('equipment_id'), equipment);
  }

  public deleteEquipment(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-equipment/equipment/" + sessionStorage.getItem('equipment_id'));
  }

}
