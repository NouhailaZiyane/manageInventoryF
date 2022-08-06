import { Component, OnInit } from '@angular/core';
import { CommandeF } from '../models/CommandeF';
import { CommandeFService } from '../services/commande-f.service';
import {jsPDF} from "jspdf"

@Component({
  selector: 'app-commande-f',
  templateUrl: './commande-f.component.html',
  styleUrls: ['./commande-f.component.css']
})
export class CommandeFComponent implements OnInit {

  c!:CommandeF[]
  search: string=''
  p: CommandeF= new CommandeF
  constructor(private cf: CommandeFService) { }

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
