import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrepot } from '../models/Entrepot';
import { EntrepotService } from '../services/entrepot.service';

@Component({
  selector: 'app-form-entrepot',
  templateUrl: './form-entrepot.component.html',
  styleUrls: ['./form-entrepot.component.css']
})
export class FormEntrepotComponent implements OnInit {

  e: Entrepot= new Entrepot
  constructor(private ser: EntrepotService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.router.params
    .subscribe(params=>{
         let id:number=params['id'];
         if(id!=undefined){
         this.ser.getArticle(id)
         .subscribe(reponse=> this.e=reponse)
         }   
        })
  }
  tmp!:string;
  onSubmit(){
    if(this.e.adresse!=null && this.e.cpostal!=null 
      &&
     this.e.mail!=null && this.e.tel!=null && this.e.ville!=null){
   this.ser.creerFamille(this.e)
   .subscribe(response=>console.log(response));
   this.route.navigate(['/entrepots']).then(() => {
   window.location.reload();
 });
 
}else{
 this.tmp="Veuillez remplir tous les champs"

}
 }
}
