import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeC } from '../models/CommandeC';

@Injectable({
  providedIn: 'root'
})
export class CommandeCService {
  url:string="http://localhost:8080/commandesC";
  constructor(private http: HttpClient) { }
  getArticles():Observable<CommandeC[]>{
    return this.http.get<CommandeC[]>(this.url+'/list')
  }
  creerArticle(cmde:CommandeC):Observable<any>{
    return this.http.post<CommandeC>(this.url+'/saveCC', cmde);
  }
  getArticle(id:number):Observable<CommandeC>{
     return this.http.get<CommandeC>(this.url+'/'+id);
  }
  updateArticle(article:CommandeC):Observable<CommandeC>{
    return this.http.put<CommandeC>(this.url+'/saveCC/'+article.id, article);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteCC/'+id);
}
exportArticles(){
  return this.http.get<any>(this.url+'/export', {responseType: 'arraybuffer' as 'json'})
}
countClient():Observable<BigInt>{
  return this.http.get<BigInt>(this.url+'/countC')
}
}
