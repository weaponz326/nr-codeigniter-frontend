import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/production/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class WorkersApiService {

  constructor(private http: HttpClient) { }

  productionUrl = environment.productionUrl;

  // create and get all workers belonging to user

  public getWorkers(): Observable<any>{
    return this.http.get(this.productionUrl + "module-workers/worker-list?user=" + sessionStorage.getItem('production_id'));
  }

  public postWorker(worker): Observable<any>{
    return this.http.post(this.productionUrl + "module-workers/worker/", worker);
  }

  // retreive, update and delete worker

  public getSingleWorker(): Observable<any>{
    return this.http.get(this.productionUrl + "module-workers/worker/" + sessionStorage.getItem('worker_id'));
  }

  public putWorker(worker): Observable<any>{
    return this.http.put(this.productionUrl + "module-workers/worker/" + sessionStorage.getItem('worker_id'), worker);
  }

  public deleteWorker(): Observable<any>{
    return this.http.delete(this.productionUrl + "module-workers/worker/" + sessionStorage.getItem('worker_id'));
  }

}
