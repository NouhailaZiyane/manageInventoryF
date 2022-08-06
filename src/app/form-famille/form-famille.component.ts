import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Famille } from '../models/Famille';
import { FamilleService } from '../services/famille.service';

@Component({
  selector: 'app-form-famille',
  templateUrl: './form-famille.component.html',
  styleUrls: ['./form-famille.component.css']
})
export class FormFamilleComponent implements OnInit {

  famille:Famille=new Famille();
  

  reference!:string
  constructor(private familleSer:FamilleService, private router:ActivatedRoute,
    private route:Router){}
  
ngOnInit(): void {
 
  this.router.params
  .subscribe(params=>{
       let id:number=params['id'];
       if(id){
       this.familleSer.getArticle(id)
       .subscribe(reponse=> this.famille=reponse)
       }   
      })
}
tmp!:string;
onSubmit(){
 if(this.famille.code!=null && this.famille.intitule!=null)
 { this.familleSer.creerFamille(this.famille)
  .subscribe(response=>console.log(response));
  this.route.navigate(['/familles']).then(() => {
  window.location.reload();
});}else{
  this.tmp="Veuillez remplir tous les champs"

}

}


}
