import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public dataForm!: FormGroup;
  url:string="http://localhost:8080/articles";
  
  constructor(private http: HttpClient) { }

  getArticles():Observable<Article[]>{
    return this.http.get<Article[]>(this.url+'/list')
  }
  creerArticle(formData:FormData):Observable<any>{
    return this.http.post<Article>(this.url+'/newArticle', formData);
  }
  getArticle(id:number):Observable<Article>{
     return this.http.get<Article>(this.url+'/'+id);
  }
  updateArticle(article:Article):Observable<Article>{
    return this.http.put<Article>(this.url+'/saveU/'+article.id, article);
 }
 deleteArticle(id:number):Observable<any>{
  return this.http.delete<any>(this.url+'/deleteArticle/'+id);
}
exportArticles(){
  return this.http.get<any>(this.url+'/export', {responseType: 'arraybuffer' as 'json'})
}
changerImage(formData:FormData):Observable<Article>{
  return this.http.put<Article>(this.url+'/saveImArticle', formData);
}
 
}
