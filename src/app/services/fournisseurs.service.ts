import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from '../models/Fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseursService {

  url:string="http://localhost:8080/fournisseurs";
  constructor(private http: HttpClient) { }
  getArticles():Observable<Fournisseur[]>{
    return this.http.get<Fournisseur[]>(this.url+'/list')
  }
  creerArticle(article:Fournisseur):Observable<Fournisseur>{
    return this.http.post<Fournisseur>(this.url+'/saveFourni', article);
  } 
  getArticle(id:number):Observable<Fournisseur>{
     return this.http.get<Fournisseur>(this.url+'/'+id);
  }
  updateArticle(article:Fournisseur):Observable<Fournisseur>{
    return this.http.put<Fournisseur>(this.url+'/saveF/'+article.id, article);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteFourni/'+id);
}
countFournisseur():Observable<BigInt>{
    return this.http.get<BigInt>(this.url+'/countFour')
}
exportArticles(){
  return this.http.get<any>(this.url+'/export', {responseType: 'arraybuffer' as 'json'})
}
}
