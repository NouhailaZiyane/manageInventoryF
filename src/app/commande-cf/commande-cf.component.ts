import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { CommandeF } from '../models/CommandeF';
import { CommandeFService } from '../services/commande-f.service';

@Component({
  selector: 'app-commande-cf',
  templateUrl: './commande-cf.component.html',
  styleUrls: ['./commande-cf.component.css']
})
export class CommandeCFComponent implements OnInit {
  cheminImage:any = "../assets/N-stock.png";

  client!:CommandeF
  constructor(private serCF: CommandeFService, private router: ActivatedRoute) { }

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
