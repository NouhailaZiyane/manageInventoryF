import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string="http://localhost:8080/users";
  constructor(private http:HttpClient) { }

  getArticles():Observable<User[]>{
    return this.http.get<User[]>(this.url+'/list')
  }
  creerArticle(article:User):Observable<User>{
    return this.http.post<User>(this.url+'/saveUser', article);
  }
  getArticle(id:number):Observable<User>{
     return this.http.get<User>(this.url+'/'+id);
  }
  updateArticle(article:User):Observable<User>{
    return this.http.put<User>(this.url+'/saveUs/'+article.id, article);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteArticle/'+id);
 
}
changerPass(id: number,pass: string){
   return this.http.put<User>(this.url+'/pass/'+id, pass);
}
}
