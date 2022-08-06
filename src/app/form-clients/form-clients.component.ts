import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD } from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Client } from '../models/Client';
import { ClientsService } from '../services/clients.service';


@Component({
  selector: 'app-form-clients',
  templateUrl: './form-clients.component.html',
  styleUrls: ['./form-clients.component.css']
})
export class FormClientsComponent implements OnInit {

  client:Client=new Client();
  constructor(private clientSer: ClientsService, private router:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.router.params
    .subscribe(params=>{
         let id:number=params['id'];
         if(id){
         this.clientSer.getArticle(id)
         .subscribe(reponse=> this.client=reponse)
         }   
        })
  }
  tmp!:string;
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(){
    if(this.client.adresse!=null || this.client.cpostal!=null && this.client.fax!=null
      &&
     this.client.mail!=null && this.client.nom!=null && this.client.pays!=null &&
     this.client.prenom!=null && this.client.tel!=null && this.client.ville!=null){
   this.clientSer.creerArticle(this.client)
   .subscribe(response=>console.log(response));
   this.route.navigate(['/clients']).then(() => {
   window.location.reload();
   window.location.reload();
 });
 
}else{
 this.tmp="Veuillez remplir tous les champs"

}
 }
}
export class MyTel {
  constructor(public area: string, public exchange: string, public subscriber: string) {}
}

