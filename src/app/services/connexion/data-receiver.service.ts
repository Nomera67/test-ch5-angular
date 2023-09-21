import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class DataReceiverService {

  private apiUrl = 'http://10.57.17.60/INLO/config.json'

  constructor(private http: HttpClient) { }

  getConfigData(): Observable<any>{
    return this.http.get(this.apiUrl)
  }

}
