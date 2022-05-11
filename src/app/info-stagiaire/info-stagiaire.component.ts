import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';
import { Stagiaire } from '../model/stagiaire'; 
import { StagiaireService } from '../service/stagiaire-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-info-stagiaire',
  templateUrl: './info-stagiaire.component.html',
  styleUrls: ['./info-stagiaire.component.css']
})
export class InfoStagiaireComponent implements OnInit {
  @Input()
  stag !: Stagiaire;
  form !: FormGroup;

  @Output()
  updateEvent = new EventEmitter();

  constructor(private ss: StagiaireService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      
      nom: new FormControl(this.stag.nom),
      prenom: new FormControl(this.stag.prenom),
      tel: new FormControl(this.stag.telephone),
      mail: new FormControl(this.stag.mail)
    });
  }
  changementDetailStagiaire(sModifie: FormGroup) {
    let stag = {
      id: this.stag.id,
      nom: sModifie.value.nom,
      prenom: sModifie.value.prenom,
      telephone: sModifie.value.telephone,
      mail: sModifie.value.mail
    }
    this.ss.updateStag(stag).subscribe((stag: Stagiaire) => {
      console.log("Stagiaire mise à jour :" + stag.nom);
      this.updateEvent.emit();
    }
    );
  }
}

