import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  url:string="http://localhost:8080/clients";

  constructor(private http: HttpClient) { }
  
  getArticles():Observable<Client[]>{
    return this.http.get<Client[]>(this.url+'/list')
  }
  creerArticle(article:Client):Observable<Client>{
    return this.http.post<Client>(this.url+'/saveClient', article);
  } 
  getArticle(id:number):Observable<Client>{
     return this.http.get<Client>(this.url+'/'+id);
  }
  updateArticle(article:Client):Observable<Client>{
    return this.http.put<Client>(this.url+'/saveCl/'+article.id, article);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteClient/'+id);
}
countClient():Observable<BigInt>{
    return this.http.get<BigInt>(this.url+'/countC')
}
}
