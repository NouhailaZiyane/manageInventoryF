import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conditionnement } from '../models/Conditionnement';

@Injectable({
  providedIn: 'root'
})
export class ConditionnementService {
  url:string="http://localhost:8080/cond";

  constructor(private http: HttpClient) { }
  creerFamille(cond: Conditionnement):Observable<Conditionnement>{
    return this.http.post<Conditionnement>(this.url+'/addC', cond);
  }
  getArticles(id: number):Observable<Conditionnement[]>{
    return this.http.get<Conditionnement[]>(this.url+'/list/'+ id);
  }
  update( q:Conditionnement):Observable<Conditionnement>{
    return this.http.put<Conditionnement>(this.url+'/updateC/'+q.id, q);
  }
  deleteArticle(id:number):Observable<any>{
    return this.http.delete<any>(this.url+'/deleteC/'+id);
  }
}
