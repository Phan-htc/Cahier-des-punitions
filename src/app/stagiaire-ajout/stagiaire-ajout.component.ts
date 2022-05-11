import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stagiaire } from '../model/stagiaire';
import { StagiaireService } from '../service/stagiaire-service.service';

@Component({
  selector: 'app-stagiaire-ajout',
  templateUrl: './stagiaire-ajout.component.html',
  styleUrls: ['./stagiaire-ajout.component.css']
})
export class StagiaireAjoutComponent implements OnInit {

  constructor(private ss: StagiaireService) { }

  ngOnInit(): void {
  }
  dernierNom = "";
  /**
  * Traiter le formulaire = demander au service Personne d'ajouter la personne
  * @param form 
  */
  // Méthode de traitement du formulaire des stagiaire

  traiterFormulaire(form: NgForm) {
    console.log(this.formValueVersStagiaire(form.value));
    this.ss.ajouterStagiaire(this.formValueVersStagiaire(form.value))
      .subscribe();
    (p: Stagiaire) => { console.log(p) }

    this.dernierNom = form.value.nom + " " + form.value.prenom;
    form.reset();
  }
  formValueVersStagiaire(formValue: any): Stagiaire {
    return {
      nom: this.nullVersChaineVide(formValue.nom),
      prenom: this.nullVersChaineVide(formValue.prenom),
      mail: this.nullVersChaineVide(formValue.mail),
      telephone: this.nullVersChaineVide(formValue.telephone)
    } as Stagiaire;
  }

  nullVersChaineVide(chaine: string | null): string {
    return chaine ? chaine : ''
  }
}

