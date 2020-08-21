import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SettingsApiService {

  personalUrl = environment.personalUrl;

  constructor(private http: HttpClient) { }

}
