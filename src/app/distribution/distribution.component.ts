import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Distribution } from '../model/distribution';
import { DistributionService } from '../service/distribution.service';

@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  DistributionAAfficher: Distribution[] = [];
  constructor(private ds: DistributionService) { 
    this.majDistributionAAfficher();
  }
  
  ngOnInit(): void {
  }

  // Méthode de traitement du formulaire des punitions
  traiterFormulaireAttribution(form: NgForm){
    this.ds.ajouterDistribution(this.formValueDistribution(form.value)) 
    .subscribe();
      (d: Distribution) => { console.log(d) }
    ;
    form.reset() // reset le formulaire
  }
  
  formValueDistribution(FormValue:any): Distribution {
    return {
      id_stagiaire: FormValue.id_stagiaire,
      id_punition: FormValue.id_punition,
      lieu: FormValue.lieu,
      jour: FormValue.jour,
    } as Distribution;
  }
  majDistributionAAfficher(){
    this.ds.getDistribution().subscribe((distributionPubliees: Distribution[]) => {
      this.DistributionAAfficher = distributionPubliees})
  }
}