import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Distribution } from '../model/distribution';
import { Punition } from '../model/punition';
import { Stagiaire } from '../model/stagiaire';
import { DistributionService } from '../service/distribution.service';

@Component({
  selector: 'app-distribution-detail',
  templateUrl: './distribution-detail.component.html',
  styleUrls: ['./distribution-detail.component.css']
})
export class DistributionDetailComponent implements OnInit {
  
  @Input()
  dist !: Distribution;
  @Input()
  puni!: Punition;
  @Input()
  stag!: Stagiaire;
  @Input()
  index!:Number;

  suppressionDistributionEvent = new EventEmitter();
  affichageDetailEvent = new EventEmitter();
  constructor(private ds: DistributionService) { }


  ngOnInit(): void {
  }
  traiterBoutonSupprimer(d: Distribution) {
    //this.ps.supprimerPersonne(p);
    this.suppressionDistributionEvent.emit(d)
  }
  afficherDetail(d: Distribution) {
    this.affichageDetailEvent.emit(d);
  }
}

