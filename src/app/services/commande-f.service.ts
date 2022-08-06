import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommandeF } from '../models/CommandeF';

@Injectable({
  providedIn: 'root'
})
export class CommandeFService {
  url:string="http://localhost:8080/commandesF";
  constructor(private http: HttpClient) { }
  getArticles():Observable<CommandeF[]>{
    return this.http.get<CommandeF[]>(this.url+'/list')
  }
  creerArticle(cmde:CommandeF):Observable<any>{
    return this.http.post<CommandeF>(this.url+'/saveCF', cmde);
  }
  getArticle(id:number):Observable<CommandeF>{
     return this.http.get<CommandeF>(this.url+'/'+id);
  }
  updateArticle(article:CommandeF):Observable<CommandeF>{
    return this.http.put<CommandeF>(this.url+'/saveCF/'+article.id, article);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteCF/'+id);
}
exportArticles(){
  return this.http.get<any>(this.url+'/export', {responseType: 'arraybuffer' as 'json'})
}
countClient():Observable<BigInt>{
  return this.http.get<BigInt>(this.url+'/countC')
}
}
