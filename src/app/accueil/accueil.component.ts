import { getNumberOfCurrencyDigits } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartType } from 'angular-google-charts';
import * as Highcharts from 'highcharts';
import { Article } from '../models/Article';
import { Famille } from '../models/Famille';
import { AccueilService } from '../services/accueil.service';
import { ArticleService } from '../services/article.service';
import { ClientsService } from '../services/clients.service';
import { FamilleService } from '../services/famille.service';
import { FournisseursService } from '../services/fournisseurs.service';
//import { Color, Label, SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {
  

/************************** */
  countStock!:BigInt
  countArticle!:BigInt
  countFournis!:BigInt
  countClients!:BigInt
  articles:Article[]=[];
  famille!:Famille[];
  key:string[]=[];
  val:number[]=[];
  fa!:Famille;
  




  /******************** */
  barChart = ChartType.BarChart;
  data: any[] = [];
  columnNames = ['Language', 'articles'];
  width = 600;
  height = 400;

  pieChart = ChartType.BarChart;
  data1: any[] = [];
  columnNames1 = ['Language', 'articles'];
  width1 = 600;
  height1 = 400;
  
 
  public i=0
  /******************** */
  constructor(private route:Router, 
    private ser:AccueilService, 
    private serA: ArticleService,
     private serF: FamilleService
     , private serC:ClientsService,
     private serFo:FournisseursService) { }


  
  
  ngOnInit(): void {
    //Highcharts.chart('cont', this.options);
    let key=[]
    
    this.ser.getNA()
    .subscribe( response=> this.countArticle=response)
    this.ser.getNS()
    .subscribe( response=> this.countStock=response)
    this.serA.getArticles()
.subscribe(response=>{this.articles=response
})
this.serF.getFamilles()
    .subscribe(response=>{this.famille=response})
/******************************************************* */
let i=0
let num=0;
  this.serF.getFamilles()
      .subscribe(response=>
        response.forEach(res=>{
          this.key.push(res.intitule)
   
          this.serA.getArticles()
           .subscribe(response=>{
            
         response.forEach(resp=>{
          
            this.fa=resp.f;
            if(this.fa.id==res.id){
              i+=1
              
            }
  
          })
        //  console.log(i)
        this.data.push([res.intitule.toString(), i],)
        this.val.push(i)
          i=0
        });}
        
        ))

//let j=0;
//console.log(this.val)

/******************************************************* */
this.serC.countClient().subscribe(
  resp=>this.countClients=resp
)
this.serFo.countFournisseur().subscribe(
  resp=>this.countFournis=resp
)
      

  }}