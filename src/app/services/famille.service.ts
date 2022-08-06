import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Famille } from '../models/Famille';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {
  url:string="http://localhost:8080/familles";
  
  constructor(private http: HttpClient) { }

  getFamilles():Observable<Famille[]>{
    return this.http.get<Famille[]>(this.url+'/list')
  }
  creerFamille(famille:Famille):Observable<Famille>{
    return this.http.post<Famille>(this.url+'/saveFamille', famille);
  }
  getArticle(id:number):Observable<Famille>{
     return this.http.get<Famille>(this.url+'/'+id);
  }
  updateArticle(famille:Famille):Observable<Famille>{
    return this.http.put<Famille>(this.url+'/saveF/'+famille.id, famille);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteF/'+id);
}

}
