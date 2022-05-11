import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Punition } from '../model/punition'; // importation de l'objet Punition
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PunitionService {

  private punitionUrl = 'http://localhost:3000/api/punitions';
  private httpOptions = {
    'headers': new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }
  
  //Méthode qui ajoute une personne dans la bdd
  
  ajouterPunition(punition:Punition): Observable<Punition>{
    return this.http.post<Punition>(this.punitionUrl,punition); 
  }
  
  //Fonction qui récupère la liste des punitions
  getPunition(): Observable<Punition[]> {
    return this.http.get<Punition[]>(this.punitionUrl);

  }
  supprimerPunition(punitionASupprimer: Punition) {
    return this.http.delete<Punition>(this.punitionUrl + '/' + punitionASupprimer.id);
    }
}