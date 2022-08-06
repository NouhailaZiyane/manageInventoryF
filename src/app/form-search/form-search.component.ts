import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConditionnementComponent } from '../conditionnement/conditionnement.component';
import { Article } from '../models/Article';
import { Famille } from '../models/Famille';
import { QualiteComponent } from '../qualite/qualite.component';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
search: string="";
  articles!:Article[];
 
  @Output()
 eventHandle: EventEmitter<string>= new EventEmitter<string>();
   constructor(public articleSer:ArticleService, private route:Router, private dialog:MatDialog) { }
 
   filter(){
    this.eventHandle.emit(this.search);

   }
  
 
 
   famille!:Famille[];
   i=0;
   ngOnInit(): void {
     this.articleSer.getArticles()
     .subscribe(response=> {this.articles=response;
     })
     
 
     
   }
 deleteArticle(id:number):any{
   this.articleSer.deleteArticle(id).subscribe(
     response=>{ this.articles = this.articles.filter(item => item.id != id)}
   )}
   export(){
    this.articleSer.exportArticles().subscribe((res)=>{
     let file= new Blob([res], {type: 'application/vnd.ms-excel'})
      var fileUrl= URL.createObjectURL(file);
      window.open(fileUrl)
    })
   }
  // this.dialogRef.open(DialogComponent);
  openDialog(a: Article) {
   const dialogRef = this.dialog.open(QualiteComponent, {
     width: '500px',
     data:a
   });
   console.log(a)
   //dialogRef.componentInstance.<id>
  
 }
 openDialog1(a: Article) {
   const dialogRef = this.dialog.open(ConditionnementComponent, {
   
     data:a
   });
   console.log(a)
   //dialogRef.componentInstance.<id>
  
 }

 }
 
 
   
 
 
 
 
 
