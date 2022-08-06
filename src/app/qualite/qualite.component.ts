import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from '../models/Article';
import { Qualite } from '../models/Qualite';
import { ArticleService } from '../services/article.service';
import { QualiteService } from '../services/qualite.service';

@Component({
  selector: 'app-qualite',
  templateUrl: './qualite.component.html',
  styleUrls: ['./qualite.component.css']
})
export class QualiteComponent implements OnInit {
  idAr!: Article;
q: Qualite= new Qualite
tmp1: any=0;
tmp!:boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ser: QualiteService, private ser1: ArticleService) {
    this.idAr= data;
   }
   
  ngOnInit(): void {
    this.ser.getArticles(this.idAr.id).subscribe(resp=> 
    {if(resp!=null){
        this.tmp= true;
        this.q=resp
    }else{
      this.tmp= false;
      
    }})
    console.log()
  }
  modifier(q: Qualite){
    this.tmp1=null
    this.q=q
   this.tmp=false;
  }
  submit(){
    this.q.a=this.idAr
    this.ser.creerFamille(this.q).subscribe()
  }

  submit1(q: Qualite){
    console.log(q)
    this.ser.update(q).subscribe();

  }
  supprimer(id: number){
    console.log(id)
    this.ser.deleteArticle(id).subscribe();
    this.ngOnInit()

  }

}
