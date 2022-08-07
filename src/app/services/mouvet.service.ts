import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';
import { Mouvet } from '../models/Mouvet';

@Injectable({
  providedIn: 'root'
})
export class MouvetService {

  
  constructor(private http: HttpClient) { }

  url:string="http://localhost:8080/mouvets";

  getFamilles():Observable<Mouvet[]>{
    return this.http.get<Mouvet[]>(this.url+'/list')
  }
  creerFamille(famille:Mouvet):Observable<Mouvet>{
    return this.http.post<Mouvet>(this.url+'/saveM', famille);
  }
  getArticle(id:number):Observable<Mouvet>{
     return this.http.get<Mouvet>(this.url+'/'+id);
  }
  creerFamille1(famille:Mouvet):Observable<Article>{
    return this.http.post<Article>(this.url+'/getMouvet', famille);
  }
  updateArticle(famille:Mouvet):Observable<Mouvet>{
    return this.http.post<Mouvet>(this.url+'/updateMouvet', famille);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteM/'+id);
}
}
