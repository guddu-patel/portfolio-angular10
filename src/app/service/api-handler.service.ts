import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  baseUrl = environment.baseUrl + '/api';
  constructor(private http: HttpClient) { }
  get(url) {
    url = this.baseUrl + url;
    return this.http.get(url);
  }
  post(url, data) {
    url = this.baseUrl + url;
    return this.http.post(url, data);
  }
  put(url, data) {
    url = this.baseUrl + url;
    return this.http.put(url, data);
  }
  delete(url) {
    url = this.baseUrl + url;
    return this.http.delete(url);
  }
}
