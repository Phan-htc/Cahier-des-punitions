import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Stagiaire } from '../model/stagiaire';
import { StagiaireService } from '../service/stagiaire-service.service';


@Component({
  selector: 'app-stagiaire-liste',
  templateUrl: './stagiaire-liste.component.html',
  styleUrls: ['./stagiaire-liste.component.css']
})

export class StagiaireListeComponent implements OnInit {
  @Input()
  updateEvent = new EventEmitter();
  stagSelected !: Stagiaire;
  stagiairesAAfficher: Stagiaire[] = [];

  constructor(private ss: StagiaireService) {
    this.majStagiairesAAfficher();

    // this.stagiaireAAfficher = ps.getStagiaire();
  } //type de données = classe d'objet

  /**
  * Gère l'évènement reçu de suppression (clic sur le bouton)
  * @param stagiaireASupprimer
  */
  traiterSuppressionStagiaire(stagiaireASupprimer: Stagiaire) {

    this.ss.supprimerStagiaire(stagiaireASupprimer).subscribe(
      () => {this.majStagiairesAAfficher();
      }
    );
  }
  afficherInfos(stagiaireItem: Stagiaire) {
    this.stagSelected = stagiaireItem;
  }
  ngOnInit(): void {
  }
  majStagiairesAAfficher() {

    this.ss.getStagiaires().subscribe(
      (stagiairesPubliees: Stagiaire[]) => {
        this.stagiairesAAfficher = stagiairesPubliees;
      }
    );
  }
}