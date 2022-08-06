import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrepot } from '../models/Entrepot';
import { Famille } from '../models/Famille';

@Injectable({
  providedIn: 'root'
})
export class EntrepotService {
  url:string="http://localhost:8080/entrepots";
  
  constructor(private http: HttpClient) { }
  getFamilles():Observable<Entrepot[]>{
    return this.http.get<Entrepot[]>(this.url+'/list')
  }
  creerFamille(famille:Entrepot):Observable<Entrepot>{
    return this.http.post<Entrepot>(this.url+'/saveE', famille);
  }
  getArticle(id:number):Observable<Entrepot>{
     return this.http.get<Entrepot>(this.url+'/'+id);
  }
  updateArticle(famille:Entrepot):Observable<Entrepot>{
    return this.http.put<Entrepot>(this.url+'/saveE/'+famille.id, famille);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteE/'+id);
}
exportArticles(){
  return this.http.get<any>(this.url+'/export', {responseType: 'arraybuffer' as 'json'})
}
}
