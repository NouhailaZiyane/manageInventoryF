import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/Article';
import { Client } from '../models/Client';
import { CommandeF } from '../models/CommandeF';
import { Conditionnement } from '../models/Conditionnement';
import { ArticleService } from '../services/article.service';
import { ClientsService } from '../services/clients.service';
import { CommandeCService } from '../services/commande-c.service';
import { ConditionnementService } from '../services/conditionnement.service';

@Component({
  selector: 'app-form-commande-c',
  templateUrl: './form-commande-c.component.html',
  styleUrls: ['./form-commande-c.component.css']
})
export class FormCommandeCComponent implements OnInit {
  value: number=0;
  prixA!: number;
  client: CommandeF= new CommandeF()
    constructor( private serF: ClientsService, private serA:ArticleService, private cond: ConditionnementService, private serCF: CommandeCService, 
      private router: ActivatedRoute, private route: Router ) { }
    tva: number=0;
    fourni!: Client[]
    article!: Article[]
    condi!: Conditionnement[]
  unite!: Conditionnement
  tmp!: string
    ngOnInit(): void {
  //    this.client.datecmde= new Date()
      this.router.params
      .subscribe(params=>{
           let id:number=params['id'];
           if(id){
           this.serCF.getArticle(id)
           .subscribe(reponse=> {this.client=reponse
            this.unite=this.client.c})
           }   
          })
      this.serF.getArticles().subscribe(res=>
        {this.fourni=res})
        this.serA.getArticles().subscribe(resp=>
          {this.article=resp;
          })
          
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
        this.unite.unite=''
  }
  change(event: any){
  this.client.quantite=Number(this.client.c.qte)
  this.client.montant=Number(this.client.c.prixV)
  this.tva=Number(this.client.c.qte)
  this.prixA=Number(this.client.c.prixV)
  
  }
  change1(event: any){
  
    this.client.montant=Number(this.client.quantite)*this.tva*this.prixA
  }
  submit(){
    if(this.client.c.unite===undefined || this.client.c.unite===null || this.client.f===undefined || this.client.condPai===undefined
      ||  this.client.a===undefined || this.client.modePai===undefined || this.client.reference===undefined
      || this.client.datecmde===undefined || this.client.quantite===0 || this.client.montant===0)
    { this.tmp='veuillez remplir tous les champs'}
    else {this.serCF.creerArticle(this.client).subscribe()
      console.log(this.client)
      this.route.navigate(['/commandeClient']).then(() => {
       window.location.reload();
      
     });}
  }
  comparer(o1: Article, o2: Article ):boolean{
    if(o1==undefined && o2== undefined) return true
    return o1==null || o2== null || o1==undefined || o2==undefined? false: o1.id==o2.id
  }
  comparer1(o1: Client, o2: Client ):boolean{
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
    else {  this.serCF.updateArticle(this.client).subscribe()
      this.route.navigate(['/commandeClient']).then(() => {
       window.location.reload();
       window.location.reload();
      
     });}
  
  }
  
  }
  