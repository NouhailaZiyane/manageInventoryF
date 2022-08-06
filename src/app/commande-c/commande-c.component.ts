import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { CommandeC } from '../models/CommandeC';
import { CommandeCService } from '../services/commande-c.service';

@Component({
  selector: 'app-commande-c',
  templateUrl: './commande-c.component.html',
  styleUrls: ['./commande-c.component.css']
})
export class CommandeCComponent implements OnInit {


  c!:CommandeC[]
  search: string=''
  p: CommandeC= new CommandeC
  constructor(private cf: CommandeCService) { }

  ngOnInit(): void {
    this.cf.getArticles().subscribe(res=>{this.c=res
      }) 
 }
 filter(searchValue: string){
  this.search=searchValue
  console.log(this.search)
}

makePDF(id:number){
  let  c= new jsPDF()
  this.cf.getArticle(id).subscribe(
    res=>{
     this.p=res
     c.text(JSON.stringify(this.p), 10, 10)
     console.log(JSON.stringify(this.p))

          }
  )

   c.save()
}
deleteArticle(id:number):any{
  this.cf.deleteArticle(id).subscribe(
    response=>{ this.c = this.c.filter(item => item.id != id)}
  )
 // this.dialogRef.open(DialogComponent);
  
}

}
