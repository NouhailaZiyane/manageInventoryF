import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
url:string="http://localhost:8080/users";
  users!:User[];
  constructor(private ser:UserService,private http: HttpClient) { }
 
  authenticate(username:string, password:string):Observable<User>{
    const u=new User;
    u.nomUtilisateur=username
    u.password=password
    return this.http.post<User>(this.url+'/login',u)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
