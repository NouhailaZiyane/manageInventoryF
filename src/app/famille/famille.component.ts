import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Famille } from '../models/Famille';
import { FamilleService } from '../services/famille.service';

@Component({
  selector: 'app-famille',
  templateUrl: './famille.component.html',
  styleUrls: ['./famille.component.css']
})
export class FamilleComponent implements OnInit {

  famille!:Famille[];


  constructor(private familleSer:FamilleService, private route:Router) { }

  ngOnInit(): void {
    this.familleSer.getFamilles()
    .subscribe(response=> this.famille=response)

    
  }
deleteFamille(id:number):any{
  this.familleSer.deleteArticle(id).subscribe(
    response=>{ this.famille = this.famille.filter(item => item.id != id)}
  )
 // this.dialogRef.open(DialogComponent);
  
}
}
