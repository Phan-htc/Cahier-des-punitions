import { Component, Input, OnInit, EventEmitter  } from '@angular/core';
import { Punition } from '../model/punition';
import { PunitionService } from '../service/punition.service';

@Component({
  selector: 'app-punition-detail',
  templateUrl: './punition-detail.component.html',
  styleUrls: ['./punition-detail.component.css']
})
export class PunitionDetailComponent implements OnInit {
  
  @Input()
  puni !: Punition;
  @Input()
  index!:Number;
  
  suppressionPunitionEvent = new EventEmitter();
  affichageDetailEvent = new EventEmitter();
  constructor(private ps: PunitionService) { }

  
  ngOnInit(): void {
  }
  traiterBoutonSupprimer(p: Punition) {
    //this.ps.supprimerPersonne(p);
    this.suppressionPunitionEvent.emit(p)
  }
  afficherDetail(p:Punition) {
    this.affichageDetailEvent.emit(p);
  }
}
