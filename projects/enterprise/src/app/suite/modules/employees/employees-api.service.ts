import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeesApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all employees belonging to account

  public getEmployees(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-employees/employee?account=" + sessionStorage.getItem('enterprise_id'));
  }

  public postEmployee(employee): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-employees/employee/", employee);
  }

  // retreive, update and delete employee

  public getSingleEmployee(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-employees/employee/" + sessionStorage.getItem('employee_id'));
  }

  public putEmployee(employee): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-employees/employee/" + sessionStorage.getItem('employee_id'), employee);
  }

  public deleteEmployee(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-employees/employee/" + sessionStorage.getItem('employee_id'));
  }

}
