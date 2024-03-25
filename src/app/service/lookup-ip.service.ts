import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development'; 
import { Observable } from 'rxjs';


@Injectable({
providedIn: 'root'
})
export class LookupIpService {
constructor(private http:HttpClient) { }
public getGeoLocationIp(ip: string) : Observable <any> {
  return this.http.get(environment.apiBaseUrl + ip + '?output=json&access_key=' +
  environment.keyAPI);
  }
  }
