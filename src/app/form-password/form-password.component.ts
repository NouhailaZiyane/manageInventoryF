import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent implements OnInit {

  ancien: string=""
  new1: string=""
  new2: string=""
  hide:boolean= true
  hide1:boolean= true
  hide2:boolean= true
  tmp!: string
  constructor(private ser: UserService, private route: Router) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.ancien)
    if(this.ancien===sessionStorage.getItem('password')?.replace("\"","")?.replace("\"","")){
      if(this.new1===this.new2){
        this.ser.changerPass(Number(sessionStorage.getItem('id')), this.new1).subscribe()
        this.route.navigate(['/']).then(() => {
          window.location.reload();
        });
      }else{
        this.tmp="Verifier votre nouveau mot de passe"
      }
    }else{
      this.tmp="Votre ancien mot de passe est incorrect"
    }
  }

}
