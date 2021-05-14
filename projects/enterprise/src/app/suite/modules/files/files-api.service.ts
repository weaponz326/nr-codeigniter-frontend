import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'projects/enterprise/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilesApiService {

  constructor(private http: HttpClient) { }

  enterpriseUrl = environment.enterpriseUrl;

  // create and get all folders belonging to account

  public getFolders(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-files/folder?account=" + sessionStorage.getItem('enterprise_id'));
  }

  public postFolder(folder): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-files/folder/", folder);
  }

  // retreive, update and delete folder

  public getSingleFolder(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-files/folder/" + sessionStorage.getItem('folder_id'));
  }

  public putFolder(folder): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-files/folder/" + sessionStorage.getItem('folder_id'), folder);
  }

  public deleteFolder(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-files/folder/" + sessionStorage.getItem('folder_id'));
  }

  // ---------------------------------------------------------------------------------------------------------------------

  // create and get all files in a folder

  public getFiles(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-files/file?folder=" + sessionStorage.getItem('folder_id'));
  }

  public postFile(file): Observable<any>{
    return this.http.post(this.enterpriseUrl + "module-files/file/", file);
  }

  // retreive, update and delete file

  public getSingleFile(): Observable<any>{
    return this.http.get(this.enterpriseUrl + "module-files/file/" + sessionStorage.getItem('file_id'));
  }

  public putFile(file): Observable<any>{
    return this.http.put(this.enterpriseUrl + "module-files/file/" + sessionStorage.getItem('file_id'), file);
  }

  public deleteFile(): Observable<any>{
    return this.http.delete(this.enterpriseUrl + "module-files/file/" + sessionStorage.getItem('file_id'));
  }

}
