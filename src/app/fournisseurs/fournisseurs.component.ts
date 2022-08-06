import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../models/Fournisseur';
import { FournisseursService } from '../services/fournisseurs.service';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  clients!:Fournisseur[];
  constructor(private ser:FournisseursService) { }

  ngOnInit(): void {
    this.ser.getArticles()
    .subscribe(response=> this.clients=response)
  }
  deleteArticle(id:number):any{
    this.ser.deleteArticle(id).subscribe(
      response=>{ this.clients = this.clients.filter(item => item.id != id)}
    )}
    export(){
      this.ser.exportArticles().subscribe((res)=>{
       let file= new Blob([res], {type: 'application/vnd.ms-excel'})
        var fileUrl= URL.createObjectURL(file);
        window.open(fileUrl)
      })
     }
}
