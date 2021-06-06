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
    return this.http.get(this.personalUrl + "module-tasks/task?user=" + localStorage.getItem('personal_id'));
  }

  public postTask(task): Observable<any>{
    return this.http.post(this.personalUrl + "module-tasks/task/", task);
  }

  // retreive, update and delete task

  public getSingleTask(taskId): Observable<any>{
    return this.http.get(this.personalUrl + "module-task/task/" + taskId);
  }

  public putTask(taskId, task): Observable<any>{
    return this.http.put(this.personalUrl + "module-task/task/" + taskId, task);
  }

  public deleteTask(taskId): Observable<any>{
    return this.http.delete(this.personalUrl + "module-task/task/" + taskId);
  }

}
