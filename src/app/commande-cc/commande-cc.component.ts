import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { CommandeC } from '../models/CommandeC';
import { CommandeCService } from '../services/commande-c.service';

@Component({
  selector: 'app-commande-cc',
  templateUrl: './commande-cc.component.html',
  styleUrls: ['./commande-cc.component.css']
})
export class CommandeCCComponent implements OnInit {
  client!:CommandeC
  cheminImage:any = "../assets/N-stock.png";
  constructor(private serCF: CommandeCService, private router: ActivatedRoute) { }

  @ViewChild('cmde', {static: true} )el!: ElementRef;
  ngOnInit(): void {
    this.router.params
    .subscribe(params=>{
         let id:number=params['id'];
         if(id){
         this.serCF.getArticle(id)
         .subscribe((reponse)=> this.client=reponse)
         }   
        })
  }
  exporter(){
    let  c= new jsPDF('p', 'pt', 'a2')
   
   c.html(this.el.nativeElement,{
    callback: (c)=>{
      c.save()
    }
   })
  
     
  }

}
