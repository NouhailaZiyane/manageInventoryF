import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mouvet } from '../models/Mouvet';
import { MouvetService } from '../services/mouvet.service';

@Component({
  selector: 'app-mouvet',
  templateUrl: './mouvet.component.html',
  styleUrls: ['./mouvet.component.css']
})
export class MouvetComponent implements OnInit {

  clients!: Mouvet[]
  constructor(private ser: MouvetService, private route: Router) { }

  ngOnInit(): void {
    this.ser.getFamilles().subscribe(res=>
      this.clients=res)
      
  }
  deleteArticle(id:number):any{
    this.ser.deleteArticle(id).subscribe(
      response=>{ this.clients = this.clients.filter(item => item.id != id)}
    )}

}
