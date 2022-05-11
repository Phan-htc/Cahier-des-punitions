import { Component, OnInit } from '@angular/core';
import { Punition } from '../model/punition';
import { PunitionService } from '../service/punition.service';

@Component({
  selector: 'app-lister-punition',
  templateUrl: './lister-punition.component.html',
  styleUrls: ['./lister-punition.component.css']
})
export class ListerPunitionComponent implements OnInit {
  buttonText!: string;
  PunitionAAfficher: Punition[] = []; // déclaration que Punition est un tableau
  
  constructor(private p: PunitionService) { 
    this.majPunitionAAfficher();
  }
  ngOnInit(): void {
  }
  traiterSuppressionPunition(punitionASupprimer: Punition) {

    this.p.supprimerPunition(punitionASupprimer).subscribe(
      () => {this.majPunitionAAfficher();
      }
    );
  }
  majPunitionAAfficher() {
    this.p.getPunition().subscribe(
      (punitionPubliees: Punition[]) => {
        this.PunitionAAfficher = punitionPubliees;
      }
    );
  }
}
