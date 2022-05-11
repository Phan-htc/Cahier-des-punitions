import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AProposComponent } from './a-propos/a-propos.component';
import { DistributionComponent } from './distribution/distribution.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { StagiaireAjoutComponent } from './stagiaire-ajout/stagiaire-ajout.component';
import { StagiaireListeComponent } from './stagiaire-liste/stagiaire-liste.component';
import { ListerPunitionComponent } from './punition-lister/lister-punition.component';
import { PunitionComponent } from './punition-ajout/punition.component'; 


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'apropos', component: AProposComponent},
  {path: 'menu', component: MenuComponent },
  {path: 'ajout-stagiaire', component: StagiaireAjoutComponent},
  {path: 'liste-stagiaire', component: StagiaireListeComponent},
  {path: 'ajout-punition', component: PunitionComponent},
  {path: 'liste-punition', component: ListerPunitionComponent},
  {path: 'distribution', component: DistributionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
