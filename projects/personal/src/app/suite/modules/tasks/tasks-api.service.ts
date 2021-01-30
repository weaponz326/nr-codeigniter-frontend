import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/personal/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor(private http: HttpClient) { }

  personalUrl = environment.personalUrl;

  public getTasks(): Observable<any>{
    return this.http.get(this.personalUrl + "module-tasks/task-list?user=" + localStorage.getItem('personal_id'));
  }

  public postTask(task): Observable<any>{
    return this.http.post(this.personalUrl + "module-tasks/task", task);
  }

}
