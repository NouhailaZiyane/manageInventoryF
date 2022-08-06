import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AuthService, private route:Router){}
  session=sessionStorage.getItem('username')?.replace("\"","")?.replace("\"","");
  id=sessionStorage.getItem('id');
  cheminImage:any = "../assets/N-stock.png";

  panelOpenState = false;
  title = 'N-Stock';
  tmp="Vous devez se connecter d'abord"
  logout(){
    this.auth.logOut();
    
    this.route.navigate(['/auth']).then(() => {
    
      window.location.reload();
    });
  }
}

