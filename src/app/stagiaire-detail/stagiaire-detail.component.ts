import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stagiaire } from '../model/stagiaire';
import { StagiaireService } from '../service/stagiaire-service.service';

@Component({
  selector: 'app-stagiaire-detail',
  templateUrl: './stagiaire-detail.component.html',
  styleUrls: ['./stagiaire-detail.component.css']
})
export class StagiaireDetailComponent implements OnInit {

  @Input()
  stag ! : Stagiaire; // le ! veut dire qu'il est normal de ne pas initialiser la variable

  @Input()
  index!:Number;

  @Output()
  suppressionStagiaireEvent = new EventEmitter <Stagiaire>();

  constructor(private ss: StagiaireService) { }

  ngOnInit(): void {
  }

  traiterBoutonSupprimer(p : Stagiaire){
    // this.ps.supprimerPersonne(p);
    this.suppressionStagiaireEvent.emit(p);
  }
  
}
