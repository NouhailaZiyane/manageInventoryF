import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../models/User';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  cheminImage:any = "../assets/N-stock.png";

  constructor(private auth:AuthService, private router:Router, private ser:UserService, private route:ActivatedRoute, private ser1: UserService) { }
  username = ''
  password = ''
  invalidLogin = false
  tmp=""
  hide = true;
  ngOnInit(): void {

   
  }
  check(){
     this.auth.authenticate(this.username, this.password).subscribe(resp=>{
      if(resp===null){
        this.tmp="Les informations sont incorrectes"
      }else{
        sessionStorage.setItem("username",JSON.stringify(resp.nomUtilisateur))
        sessionStorage.setItem("id",JSON.stringify(resp.id))
        sessionStorage.setItem("prenom",JSON.stringify(resp.prenom))
        sessionStorage.setItem("nom",JSON.stringify(resp.nom))
        sessionStorage.setItem("email",JSON.stringify(resp.email))
        sessionStorage.setItem("password",JSON.stringify(resp.password))
       
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }
     })
  }
 
 
  

}
