import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/association/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ActionPlanApiService {

  constructor(private http: HttpClient) { }

  associationUrl = environment.associationUrl;

  // create and get all plans belonging to account

  public getPlans(): Observable<any>{
    return this.http.get(this.associationUrl + "module-action-plan/plan?account=" + sessionStorage.getItem('association_id'));
  }

  public postPlan(plan): Observable<any>{
    return this.http.post(this.associationUrl + "module-action-plan/plan/", plan);
  }

  // retreive, update and delete plan

  public getSinglePlan(): Observable<any>{
    return this.http.get(this.associationUrl + "module-action-plan/plan/" + sessionStorage.getItem('plan_id'));
  }

  public putPlan(plan): Observable<any>{
    return this.http.put(this.associationUrl + "module-action-plan/plan/" + sessionStorage.getItem('plan_id'), plan);
  }

  public deletePlan(): Observable<any>{
    return this.http.delete(this.associationUrl + "module-action-plan/plan/" + sessionStorage.getItem('plan_id'));
  }

  // -----------------------------------------------------------------------------------------------------------------------------------------
  // steps

  public getSteps(): Observable<any>{
    return this.http.get(this.associationUrl + "module-action-plan/plan-step?plan=" + sessionStorage.getItem('plan_id'));
  }

  public postStep(stepData): Observable<any>{
    return this.http.post(this.associationUrl + "module-action-plan/plan-step/", stepData);
  }

  public putStep(stepId, stepData): Observable<any>{
    return this.http.put(this.associationUrl + "module-action-plan/plan-step/" + stepId, stepData);
  }

  public deleteStep(stepId): Observable<any>{
    return this.http.delete(this.associationUrl + "module-action-plan/plan-step/" + stepId);
  }

}
