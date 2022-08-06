import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})

export class FormUserComponent implements OnInit {
  id=sessionStorage.getItem('id');
  user: User= new User()
  y: number = Number(this.id);

  constructor(private ser: UserService, private route: Router) { }
  hide = true;
  ngOnInit(): void {
this.ser.getArticle(this.y).subscribe(res=> this.user=res)  
  }
submit(){
  if(this.user.password===sessionStorage.getItem('password')?.replace("\"","")?.replace("\"",""))
  {this.ser.updateArticle(this.user).subscribe()
  alert("vous avez bien modifié vos informations ")
  this.route.navigate(['/']).then(() => {
    window.location.reload();
  });}
  
  
}
email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}

