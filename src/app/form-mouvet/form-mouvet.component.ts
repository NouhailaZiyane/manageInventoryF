import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';
import { Article } from '../models/Article';
import { Entrepot } from '../models/Entrepot';
import { Mouvet } from '../models/Mouvet';
import { ArticleService } from '../services/article.service';
import { EntrepotService } from '../services/entrepot.service';
import { MouvetService } from '../services/mouvet.service';

@Component({
  selector: 'app-form-mouvet',
  templateUrl: './form-mouvet.component.html',
  styleUrls: ['./form-mouvet.component.css']
})
export class FormMouvetComponent implements OnInit {
tmp:string=""
  art!: Article[]
  entre!: Entrepot[]
  m:Mouvet= new Mouvet();
  constructor(private ser: MouvetService, private ser1:ArticleService, private ser2: EntrepotService, private route: Router, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.ser1.getArticles().subscribe(res=>
      this.art=res)
      this.ser2.getFamilles().subscribe(res=>
        this.entre=res)
this.router.params
  .subscribe(params=>{
       let id:number=params['id'];
       if(id){
       this.ser.getArticle(id)
       .subscribe(reponse=> this.m=reponse)
       }   
      })
     

  } 
   onSubmit1(id:number){
    if(this.ser.deleteArticle(id).subscribe())
   { this.ser.creerFamille1(this.m).subscribe(res=>{
      if(res===null){
        this.tmp=`l'article ${this.m.a.designation} est déjà stockée dans les entrepots`
      }else if(res.stock==-1){
        this.tmp=`la quantité que vous voulez stocker dans l'entrepot est plus grande que la quantité que vous avez`
      }else if(res.stock===-20){
        this.tmp=`vous avez deja stocké une quantité de cet article `
      }else {
        //this.tmp="mouvement a ete bien créee"
       this.route.navigate(['/mouvet']).then(() => {
          window.location.reload();
      })
    console.log(res.stock)}
    })}}
  onSubmit(){
    this.ser.creerFamille1(this.m).subscribe(res=>{
      if(res===null){
        this.tmp=`l'article ${this.m.a.designation} est déjà stockée dans les entrepots`
      }else if(res.stock==-1){
        this.tmp=`la quantité que vous voulez stocker dans l'entrepot est plus grande que la quantité que vous avez`
      }else if(res.stock===-20){
        this.tmp=`vous avez deja stocké une quantité de cet article `
      }else {
        this.tmp="mouvement a ete bien créee"
       this.route.navigate(['/mouvet']).then(() => {
          window.location.reload();
      })
    console.log(res.stock)}
    })
        
   // var i=0;
   /* if(Number(this.m.stock)>Number(this.m.a.stock)){
      
      this.tmp=`le stock que vous voulez entrer dans l'entrepot ${this.m.e.intitule} est plus grand  que 
      le stock de l'article`
    }else{
      this.ser.getFamilles().subscribe(res=>
        res.forEach(
          resp=>
          {
            if(JSON.stringify(resp.a)==JSON.stringify(this.m.a)){
              if(this.m.a.stock===resp.a.stock){
                this.tmp='cette article est deja stocké dans un entrepot'
              }
            }if(this.m.stock<resp.a.stock){
              i=resp.a.stock
              this.tmp=`${i} cette article est deja stocké dans un entrepot vous n'avez qu à ${-this.m.stock+i} à stocké`
            }
            else{
              this.tmp=""
    //  this.ser.creerFamille(this.m).subscribe()
            }
          }
        ))

        console.log(this.tmp)

    }*/
  }
  change(event: any){
    if(Number(this.m.stock)>Number(this.m.a.stock)){
      this.tmp=`le stock que vous voulez entrer dans l'entrepot ${this.m.e.intitule} est plus grand  que 
      le stock de l'article`
    }else{
      this.tmp=""
    }
  }
  comparer(o1: Entrepot, o2: Entrepot ):boolean{
    if(o1==undefined && o2== undefined) return true
    return o1==null || o2== null || o1==undefined || o2==undefined? false: o1.id==o2.id
  }
  comparer1(o1: Article, o2: Article ):boolean{
    if(o1==undefined && o2== undefined) return true
    return o1==null || o2== null || o1==undefined || o2==undefined? false: o1.id==o2.id
  }
}
