import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  ROOT_URL: string = `https://reqres.in/api`

  constructor(private http: HttpClient) { }

  get(url: string){
    return this.http.get(`${this.ROOT_URL}/${url}`);
  }

  post(url: string, payload: any){
    return this.http.post(`${this.ROOT_URL}/${url}`, payload);
  }
  
}
