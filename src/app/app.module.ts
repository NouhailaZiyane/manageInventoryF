import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { FormArticleComponent } from './form-article/form-article.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormFamilleComponent } from './form-famille/form-famille.component';
import { FamilleComponent } from './famille/famille.component';
import { ShowFamilleComponent } from './show-famille/show-famille.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ClientsComponent } from './clients/clients.component';
import { FormClientsComponent } from './form-clients/form-clients.component';
import { FormFournisseursComponent } from './form-fournisseurs/form-fournisseurs.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import { QualiteComponent } from './qualite/qualite.component';
import { ConditionnementComponent } from './conditionnement/conditionnement.component';
import { EntrepotComponent } from './entrepot/entrepot.component';
import { FormEntrepotComponent } from './form-entrepot/form-entrepot.component';
import { FormUserComponent } from './form-user/form-user.component';
import { FormPasswordComponent } from './form-password/form-password.component';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormCommandeFComponent } from './form-commande-f/form-commande-f.component';
import { CommandeFComponent } from './commande-f/commande-f.component';
import { CommandeCComponent } from './commande-c/commande-c.component';
import { FormCommandeFCreateComponent } from './form-commande-f-create/form-commande-f-create.component';
import { CommandeCFComponent } from './commande-cf/commande-cf.component';
import { MouvetComponent } from './mouvet/mouvet.component';
import { FormMouvetComponent } from './form-mouvet/form-mouvet.component';
import { FormCommandeCComponent } from './form-commande-c/form-commande-c.component';
import { FormCommandeCCreateComponent } from './form-commande-ccreate/form-commande-ccreate.component';
import { CommandeCCComponent } from './commande-cc/commande-cc.component';
import { ChangerImageComponent } from './changer-image/changer-image.component';
import { ExampleTelInputContainerComponent } from './example-tel-input-container/example-tel-input-container.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesComponent,
    FormArticleComponent,
    DialogComponent,
    FormFamilleComponent,
    FamilleComponent,
    ShowFamilleComponent,
    AccueilComponent,
    ClientsComponent,
    FormClientsComponent,
    FormFournisseursComponent,
    FournisseursComponent,
    AuthComponent,
    QualiteComponent,
    ConditionnementComponent,
    EntrepotComponent,
    FormEntrepotComponent,
    FormUserComponent,
    FormPasswordComponent,
    FormSearchComponent,
    FormCommandeFComponent,
    CommandeFComponent,
    CommandeCComponent,
    FormCommandeFCreateComponent,
    CommandeCFComponent,
    MouvetComponent,
    FormMouvetComponent,
    FormCommandeCComponent,
    FormCommandeCCreateComponent,
    CommandeCCComponent,
    ChangerImageComponent,
    ExampleTelInputContainerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
   MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleChartsModule,
    MatCardModule,
    MatTooltipModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
   // MatRippleModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class AppModule { }
