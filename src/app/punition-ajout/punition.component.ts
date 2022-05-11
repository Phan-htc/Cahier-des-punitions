
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Punition } from '../model/punition';
import { PunitionService } from '../service/punition.service';
@Component({
  selector: 'app-punition',
  templateUrl: './punition.component.html',
  styleUrls: ['./punition.component.css']
})
export class PunitionComponent implements OnInit {

  constructor(private ps: PunitionService) { }

  ngOnInit(): void {
  }

  // Méthode de traitement du formulaire des punitions
  traiterFormulairePunition(form: NgForm){
    this.ps.ajouterPunition(this.formValuePunition(form.value)).subscribe( 
      (p: Punition) => { console.log(p) }
    );
    form.reset() // reset le formulaire
  }
  
  formValuePunition(formValue:any): Punition {
    return {
      type_punition: formValue.type_punition,
    } as Punition;
  }


}
