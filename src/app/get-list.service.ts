import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetListService {

  constructor(private http: HttpClient) { }

  getNameList():Observable<any> {
    return this.http.get('/1005_names.txt', {responseType: 'text'})
  }
}
