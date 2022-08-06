import { Component, OnInit } from '@angular/core';
import { Entrepot } from '../models/Entrepot';
import { EntrepotService } from '../services/entrepot.service';

@Component({
  selector: 'app-entrepot',
  templateUrl: './entrepot.component.html',
  styleUrls: ['./entrepot.component.css']
})
export class EntrepotComponent implements OnInit {

  entrepots!:Entrepot[]
  constructor(private ser: EntrepotService) { }

  ngOnInit(): void {
      this.ser.getFamilles().subscribe(res=> this.entrepots=res)
  }

  deleteArticle(id:number):any{
    this.ser.deleteArticle(id).subscribe(
      response=>{ this.entrepots = this.entrepots.filter(item => item.id != id)}
    )
}}
