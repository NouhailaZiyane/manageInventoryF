import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/Article';
import { CommandeF } from '../models/CommandeF';
import { Conditionnement } from '../models/Conditionnement';
import { Fournisseur } from '../models/Fournisseur';
import { ArticleService } from '../services/article.service';
import { CommandeFService } from '../services/commande-f.service';
import { ConditionnementService } from '../services/conditionnement.service';
import { FournisseursService } from '../services/fournisseurs.service';

@Component({
  selector: 'app-form-commande-f-create',
  templateUrl: './form-commande-f-create.component.html',
  styleUrls: ['./form-commande-f-create.component.css']
})
export class FormCommandeFCreateComponent implements OnInit {
  value: number=0;
  prixA!: number;
  client: CommandeF= new CommandeF()
  tmp!: string;
    constructor( private serF: FournisseursService, private serA:ArticleService, private cond: ConditionnementService, private serCF: CommandeFService, 
      private router: ActivatedRoute, private route: Router ) { }
    tva: number=0;
    fourni!: Fournisseur[]
    article!: Article[]
    condi!: Conditionnement[]
  
    ngOnInit(): void {
  //    this.client.datecmde= new Date()
      this.router.params
      .subscribe(params=>{
           let id:number=params['id'];
           if(id){
           this.serCF.getArticle(id)
           .subscribe((reponse)=> this.client=reponse)
           }   
          })
      this.serF.getArticles().subscribe(res=>
        {this.fourni=res})
        this.serA.getArticles().subscribe(resp=>
          {this.article=resp;
          })
          //console.log(this.client.datecmde)
         this.getDate(this.client.datecmde)
    }
    getDate(date: string):any{
      if (date) {
          let dateOld: Date = new Date(date);
          return dateOld;}
    }
    
    onChange(event: any){
      //console.log(event)
    //console.log(JSON.stringify(a))
      this.cond.getArticles(event.id).subscribe(res=>
        {this.condi=res;}
        )
  }
  change(event: any){
  this.client.quantite=event.qte
  this.client.montant=event.prixA
  this.tva=event.qte
  this.prixA=event.prixA
  console.log(event)
  }
  change1(event: any){
    this.client.montant=Number(this.client.quantite)*this.tva*this.prixA
  }
  submit(){
     this.serCF.creerArticle(this.client).subscribe()
     console.log(this.client)
     this.route.navigate(['/commandeFourni']).then(() => {
      window.location.reload();
     
    });
  }
  comparer(o1: Article, o2: Article ):boolean{
    if(o1==undefined && o2== undefined) return true
    return o1==null || o2== null || o1==undefined || o2==undefined? false: o1.id==o2.id
  }
  comparer1(o1: Fournisseur, o2: Fournisseur ):boolean{
    if(o1==undefined && o2== undefined) return true
    return o1==null || o2== null || o1==undefined || o2==undefined? false: o1.id==o2.id
  }
  comparer2(o1: Conditionnement, o2: Conditionnement ):boolean{
    if(o1==undefined && o2== undefined) return true
    return o1==null || o2== null || o1==undefined || o2==undefined? false: o1.id==o2.id
  }
  submit1(){
    if(this.client.c.unite==="" || this.client.f===undefined || this.client.condPai===undefined
    ||  this.client.a===undefined || this.client.modePai===undefined || this.client.reference===undefined
    || this.client.datecmde===undefined || this.client.quantite===0 )
  { this.tmp='veuillez remplir tous les champs'}
  else { 
    this.serCF.updateArticle(this.client).subscribe()
    this.route.navigate(['/commandeFourni']).then(() => {
     window.location.reload();
    
   });}
  }
  
  }
  