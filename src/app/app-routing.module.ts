import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthComponent } from './auth/auth.component';
import { ChangerImageComponent } from './changer-image/changer-image.component';
import { ClientsComponent } from './clients/clients.component';
import { CommandeCComponent } from './commande-c/commande-c.component';
import { CommandeCCComponent } from './commande-cc/commande-cc.component';
import { CommandeCFComponent } from './commande-cf/commande-cf.component';
import { CommandeFComponent } from './commande-f/commande-f.component';
import { EntrepotComponent } from './entrepot/entrepot.component';
import { FamilleComponent } from './famille/famille.component';
import { FormArticleComponent } from './form-article/form-article.component';
import { FormClientsComponent } from './form-clients/form-clients.component';
import { FormCommandeCComponent } from './form-commande-c/form-commande-c.component';
import { FormCommandeCCreateComponent } from './form-commande-ccreate/form-commande-ccreate.component';
import { FormCommandeFCreateComponent } from './form-commande-f-create/form-commande-f-create.component';
import { FormCommandeFComponent } from './form-commande-f/form-commande-f.component';
import { FormEntrepotComponent } from './form-entrepot/form-entrepot.component';
import { FormFamilleComponent } from './form-famille/form-famille.component';
import { FormFournisseursComponent } from './form-fournisseurs/form-fournisseurs.component';
import { FormMouvetComponent } from './form-mouvet/form-mouvet.component';
import { FormPasswordComponent } from './form-password/form-password.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { HeaderComponent } from './header/header.component';
import { MouvetComponent } from './mouvet/mouvet.component';
import { ShowFamilleComponent } from './show-famille/show-famille.component';


const routes: Routes = [
 { path:'newArticle', component: FormArticleComponent},
 { path:'newFamille', component: FormFamilleComponent},
 { path:'articles', component: ArticlesComponent},
 { path:'familles', component: FamilleComponent},
 { path:'articles/:id', component:FormArticleComponent},
 { path:'fournisseurs', component:FournisseursComponent},
 { path:'newFournisseur', component:FormFournisseursComponent},
 { path:'fournisseur/:id', component:FormFournisseursComponent},
 { path:'clients', component: ClientsComponent},
 { path:'newClient', component:FormClientsComponent},
 { path:'client/:id', component:FormClientsComponent},
 { path:'header', component:HeaderComponent},
 { path:'familles/:id', component:FormFamilleComponent},
 { path:'newEntrepot', component:FormEntrepotComponent},
 { path:'auth', component:AuthComponent},
 { path:'', component:AccueilComponent},
 { path:'entrepots', component:EntrepotComponent},
 { path:'entrepots/:id', component:FormEntrepotComponent},
 { path:'modifierInfo', component:FormUserComponent},
 { path:'modifierPass', component:FormPasswordComponent},
 { path:'commandeFourni', component:CommandeFComponent},
 { path:'commandeClient', component:CommandeCComponent},
 { path:'commandeFourni/:id', component:FormCommandeFComponent},
 { path:'commandeClient/:id', component:FormCommandeCComponent},
 { path:'commandeCF/:id', component:CommandeCFComponent},
 { path:'commandeCC/:id', component:CommandeCCComponent},
 { path:'commandeFourniForm', component:FormCommandeFCreateComponent},
 { path:'commandeClientForm', component:FormCommandeCCreateComponent},
 { path:'mouvet', component:MouvetComponent},
 { path:'formMouvet', component:FormMouvetComponent},
 { path:'formMouvet/:id', component:FormMouvetComponent},
 { path:'changerImage/:id', component:ChangerImageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
