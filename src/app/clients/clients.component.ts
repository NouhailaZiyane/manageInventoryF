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
   
  deleteArticle(id:number):any{
    this.ser.deleteArticle(id).subscribe(
      response=>{ this.clients = this.clients.filter(item => item.id != id)}
    )
   // this.dialogRef.open(DialogComponent);
    
  }
}
