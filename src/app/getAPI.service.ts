import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class getAPIservis {

  constructor(private httpClient: HttpClient) {
  }

  Get(url:string): Observable<any> {
    return this.httpClient.get(url);

  }
  
}
