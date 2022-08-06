import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from '../models/Article';
import { Conditionnement } from '../models/Conditionnement';
import { ConditionnementService } from '../services/conditionnement.service';

@Component({
  selector: 'app-conditionnement',
  templateUrl: './conditionnement.component.html',
  styleUrls: ['./conditionnement.component.css']
})
export class ConditionnementComponent implements OnInit {
  c:Conditionnement= new Conditionnement();
  tmp:boolean= true;
  a!: Article
  article!: Conditionnement[]
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private ser: ConditionnementService) { }

  ngOnInit(): void {
    this.a=this.data
    this.ser.getArticles(this.a.id).subscribe(resp=>{this.article= resp
      console.log(resp)
      if(this.article.length===0){
        this.tmp= false;
     }else{
       this.tmp= true;
     }})
   
  }
onSubmit(){
  this.c.a= this.data
  this.ser.creerFamille(this.c).subscribe() 
  alert("L'ajout du conditionnement de l'article "+ this.c.a.designation+" a été bien effectué")
  this.ser.getArticles(this.a.id).subscribe(resp=>{this.article= resp
    console.log(resp)
    if(this.article.length===0){
      this.tmp= false;
   }else{
     this.tmp= true;
   }})

}
 deleteArticle(id: number){
  this.ser.deleteArticle(id).subscribe();
  alert("Suppression  du conditionnement  a été bien effectuée")
  this.ser.getArticles(this.a.id).subscribe(resp=>{this.article= resp
    console.log(resp)
    if(this.article.length===0){
      this.tmp= false;
   }else{
     this.tmp= true;
   }})

 }
 cliquer(){
   this.tmp=false
 }
modifier(c:Conditionnement){
  this.ser.update(c).subscribe();
  alert("La modification du conditionnement de l'article "+ this.c.a.designation+" a été bien effectuée")
  this.ser.getArticles(this.a.id).subscribe(resp=>{this.article= resp
    console.log(resp)
    if(this.article.length===0){
      this.tmp= false;
   }else{
     this.tmp= true;
   }})
}
modifier1(c:Conditionnement){
  this.c=c
  this.tmp=false
}

}
