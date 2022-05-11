import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistributionComponent } from './distribution/distribution.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AProposComponent } from './a-propos/a-propos.component';

import { StagiaireAjoutComponent } from './stagiaire-ajout/stagiaire-ajout.component';
import { StagiaireDetailComponent } from './stagiaire-detail/stagiaire-detail.component';
import { StagiaireListeComponent } from './stagiaire-liste/stagiaire-liste.component';
import { InfoStagiaireComponent } from './info-stagiaire/info-stagiaire.component';

import { ListerPunitionComponent } from './punition-lister/lister-punition.component';
import { PunitionDetailComponent } from './punition-detail/punition-detail.component';
import { PunitionComponent } from './punition-ajout/punition.component';
import { DistributionDetailComponent } from './distribution-detail/distribution-detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AProposComponent,
    PunitionComponent,
    DistributionComponent,

    StagiaireAjoutComponent,
    StagiaireDetailComponent,
    StagiaireListeComponent,
    InfoStagiaireComponent,

    ListerPunitionComponent,
    PunitionDetailComponent,
    PunitionComponent,
    DistributionDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatCardModule,
    MatIconModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
