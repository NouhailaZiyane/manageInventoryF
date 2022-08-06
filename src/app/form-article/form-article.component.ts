import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FamilleService } from '../services/famille.service';
import { Famille } from '../models/Famille';
import { Article } from '../models/Article';
import { ArticleService } from '../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileHandle } from '../models/File-handler';
import { DomSanitizer } from '@angular/platform-browser';
import { Conditionnement } from '../models/Conditionnement';
import { ConditionnementService } from '../services/conditionnement.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css']
})
export class FormArticleComponent implements OnInit {
    c:Conditionnement= new Conditionnement();
    famille!:Famille[];
    article:Article={
      reference: "",
      designation: "",
      typeArticle: "",
      codeBarre: "",
      nomenclature: "",
      uniteGestion: "",
      stock: 0,
      imagesAr: "",
      id: 0,
      f: new Famille,
      
    };
    imgUrl!:any;
    imgPath!:any;
    msg!:string;
    imgAr!:any;
    imgA!:FileHandle

    fa!: Famille;
    tmp1!: string
    reference!:string
     constructor(private familleSer:FamilleService, private articleSer:ArticleService, private router:ActivatedRoute,
      private route:Router, private ser3: ConditionnementService){}
      
  ngOnInit(): void {
    this.familleSer.getFamilles()
    .subscribe(response=> {this.famille=response
     
    })
    

    this.router.params
    .subscribe(params=>{
         let id:number=params['id'];
         if(id){
         this.articleSer.getArticle(id)
         .subscribe(reponse=> this.article=reponse)
         }   
        })
  }
 
  prepareFormData(article:Article): FormData{
    const formData= new FormData();
    formData.append(
      "article",
      new Blob([JSON.stringify(article)], {type: 'application/json'})
    );
   console.log(this.imgAr)
    formData.append(
      "image",
      this.imgAr
    );
   
  

  return formData;
  }
 tmp!:string;
  onSubmit(){
    if(this.article.f!=null && this.article.codeBarre!=null && this.article.reference!=null && this.article.designation!=null && this.article.imagesAr!=null 
      && this.article.stock!=null && this.article.nomenclature!=null && this.article.typeArticle!=null && this.article.uniteGestion!=null ){
      const formAr= this.prepareFormData(this.article);
    this.articleSer.creerArticle(formAr)
    .subscribe(response=>console.log(response));
    this.route.navigate(['/articles']).then(() => {
      window.location.reload();
      window.location.reload();
    });
  
}else{
  this.tmp="Veuillez remplir tous les champs"
}
  }

  onSelectedFile(event: any){
   
    if(event.target.files.length>0){
      const file=event.target.files[0]
      this.imgAr=file;
     
      var mimeType= event.target.files[0].type;
   if(mimeType.match(/image\/*/)==null){
    this.msg="seulment les images sont supportés"
    return ;
   }

   var reader= new FileReader();
   this.imgPath=file;
   reader.readAsDataURL(file);
   reader.onload=(_event)=>{
    this.imgUrl=reader.result;
    
   }
  }
 
  }

  comparer(o1: Famille, o2: Famille ):boolean{
    if(o1==undefined && o2== undefined) return true
    return o1==null || o2== null || o1==undefined || o2==undefined? false: o1.id==o2.id
  }
  onSubmit1(){
    if(this.article.f!=null){
     
    this.articleSer.updateArticle(this.article)
    .subscribe(response=>console.log(response));
    this.route.navigate(['/articles']).then(() => {
    window.location.reload();
  });
  
}else{
  this.tmp="Veuillez choisir la famille d'article"
}
  }
}
 
    
   

