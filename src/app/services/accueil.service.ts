import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccueilService {

 
  url:string="http://localhost:8080/articles";
  constructor(private http: HttpClient) { }
  getNA():Observable<BigInt>{
    return this.http.get<BigInt>(this.url+'/getNA')
  }
  getNS():Observable<BigInt>{
    return this.http.get<BigInt>(this.url+'/getNS')
  }

}
