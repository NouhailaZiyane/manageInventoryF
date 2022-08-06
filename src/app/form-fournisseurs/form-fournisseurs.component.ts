import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../models/Fournisseur';
import { FournisseursService } from '../services/fournisseurs.service';

@Component({
  selector: 'app-form-fournisseurs',
  templateUrl: './form-fournisseurs.component.html',
  styleUrls: ['./form-fournisseurs.component.css']
})
export class FormFournisseursComponent implements OnInit {
client:Fournisseur=new Fournisseur();
  constructor(private clientSer:FournisseursService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void { this.router.params
    .subscribe(params=>{
         let id:number=params['id'];
         if(id){
         this.clientSer.getArticle(id)
         .subscribe(reponse=> this.client=reponse)
         }   
        })
  }
  tmp!:string;
  onSubmit(){
    if(this.client.adresse!=null || this.client.cpostal!=null && this.client.fax!=null
       &&
      this.client.mail!=null && this.client.nom!=null && this.client.pays!=null &&
      this.client.prenom!=null && this.client.tel!=null && this.client.ville!=null){
    this.clientSer.creerArticle(this.client)
    .subscribe(response=>console.log(response));
    this.route.navigate(['/fournisseurs']).then(() => {
    window.location.reload();
  });
  
}else{
  this.tmp="Veuillez remplir tous les champs"

}
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  }