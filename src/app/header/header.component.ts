import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { ArticleService } from '../services/article.service';
import { ClientsService } from '../services/clients.service';
import { CommandeCService } from '../services/commande-c.service';
import { CommandeFService } from '../services/commande-f.service';
import { FamilleService } from '../services/famille.service';
import { FournisseursService } from '../services/fournisseurs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pieChart = ChartType.PieChart;
  data: any[] = [];
  columnNames = ['Language', 'articles'];
  width = 600;
  height = 400;
  donutOptions = {
    pieHole: 0.5
  }
  pieChart1 = ChartType.BarChart;
  data1: any[] = [];
  columnNames1 = ['Products', 'Articles'];
  width1 = 600;
  height1 = 400;
  options = { hAxis: {
    title: 'Status'
  },
  vAxis: {
    minValue: 0
  },
  isStacked: true,
  colors: ['#5cb85c', '#f0ad4e', '#d9534f', '#5bc0de']
};

  pieChart2 = ChartType.ColumnChart;
  data2: any[] = [];
  columnNames2 = ['clients et fournisseurs','clients et fournisseurs'];
  data3: any[] = [];
/********************** */
pieChart4 = ChartType.PieChart;

data4: any[] = [];
  columnNames4 = ['Commande d\'achat', 'Commande de vente'];
  width4 = 600;
  height4 = 400;
  donutOptions4 = {
    pieHole: 0.5
  }
 
  constructor(private serA: ArticleService, private serF:FamilleService,
   private serFo:FournisseursService, private serC:ClientsService, private cc: CommandeCService, private cf:CommandeFService  ) { }
 countClients!:BigInt;
 countFournis!:BigInt;

  ngOnInit(): void {
    this.serC.countClient().subscribe(resp=>
      {this.countClients=resp
      this.serFo.countFournisseur().subscribe(res=>
{        this.countFournis=res;
        this.data3.push(["Clients",this.countFournis],
        ["Fournisseurs",this.countClients],)
        
}      )}
    )
    
    

    this.serA.getArticles().subscribe(res=>
      {
        res.forEach(resp=>{
          this.data.push([resp.designation.toString(), resp.stock],)
        })
    
      })
      let i=0
      this.serF.getFamilles()
      .subscribe(response=>
        response.forEach(res=>{
          //this.key.push(res.intitule)
   
          this.serA.getArticles()
           .subscribe(response=>{
            
         response.forEach(resp=>{
          
           // this.fa=resp.f;
            if(resp.f.id==res.id){
              i+=1
              
            }
  
          })
        //  console.log(i)
        this.data1.push([res.intitule.toString(), i],)
       // this.val.push(i)
          i=0
        });}
        
        ))
this.cf.countClient().subscribe(res=>{
  this.cc.countClient().subscribe(resp=>{
    this.data4.push(["Vente",resp],
    ["Achat",res],)
  })
})
        
    
  }
  
  /************************ */


}
