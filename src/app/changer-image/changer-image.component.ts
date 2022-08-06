import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Article } from '../models/Article';
import { Famille } from '../models/Famille';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-changer-image',
  templateUrl: './changer-image.component.html',
  styleUrls: ['./changer-image.component.css']
})
export class ChangerImageComponent implements OnInit {

  //article:Article= new Article()
  constructor(private router: ActivatedRoute, private articleSer: ArticleService, private route: Router) { }
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
   // imgA!:FileHandle
tmp!: string
  ngOnInit(): void {
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
    formData.append(
      "image",
      this.imgAr
    );
   
  

  return formData;
  }
  onSubmit(){
    if(this.article.imagesAr!=null){
      const formAr= this.prepareFormData(this.article);
    this.articleSer.changerImage(formAr)
    .subscribe(response=>console.log(response));
    this.route.navigate(['/articles']).then(() => {
      window.location.reload();
    });
  
}else{
  this.tmp="Veuillez choisir une image"
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
  }


