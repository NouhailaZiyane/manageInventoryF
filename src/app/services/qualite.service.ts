import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Qualite } from '../models/Qualite';

@Injectable({
  providedIn: 'root'
})
export class QualiteService {
  url:string="http://localhost:8080/qualite";

  constructor(private http: HttpClient) { }
  creerFamille(famille:Qualite):Observable<Qualite>{
    return this.http.post<Qualite>(this.url+'/saveQ', famille);
  }
  getArticles(id:number):Observable<Qualite>{
    return this.http.get<Qualite>(this.url+'/list/'+id);
 }
 update( q:Qualite):Observable<Qualite>{
  return this.http.put<Qualite>(this.url+'/updateQ/'+q.id, q);
}
deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteQ/'+id);
}
}
