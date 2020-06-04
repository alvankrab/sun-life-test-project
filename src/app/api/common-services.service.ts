import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor(private httpClient: HttpClient) { }

  public getJSON(jsonUrl : any): Observable<any> {
    return this.httpClient.get(jsonUrl);
  }

}
