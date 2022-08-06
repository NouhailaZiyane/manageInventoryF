import { Component, OnInit } from '@angular/core';
import { Client } from '../models/Client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
clients!:Client[]
search:string=''
  constructor(private ser:ClientsService) { }

  ngOnInit(): void {
    this.ser.getArticles()
    .subscribe(response=> this.clients=response)
  }

  filter(searchValue: string){
    this.search=searchValue
    console.log(this.search)
  }
  export(){
    this.ser.exportArticles().subscribe((res)=>{
     let file= new Blob([res], {type: 'application/vnd.ms-excel'})
      var fileUrl= URL.createObjectURL(file);
      window.open(fileUrl)
    })
   }
  deleteArticle(id:number):any{
    this.ser.deleteArticle(id).subscribe(
      response=>{ this.clients = this.clients.filter(item => item.id != id)}
    )
   // this.dialogRef.open(DialogComponent);
    
  }
}
